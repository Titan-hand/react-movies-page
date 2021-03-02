import axios from "axios";
import { ABORTED_REQUEST } from "../Config/networkErrors";
import {
  LOGIN_URL,
  SIGNUP_URL,
  GET_INFO_USER_LOGGED,
  VALIDATE_TOKEN_URL,
  COMMENTS_URL,
  SET_FAVORITE_MOVIE,
  GET_FAVORITE_MOVIES_USER,
} from "../Config/api.js";

import {
  MOVIES_ALL,
  MOVIES_GENRERS_URL,
  MOVIES_GENRERS,
  MOVIE_ID_URL,
} from "../Config/apiMovies.js";
import { alertError } from "./notifications.js";

import { getToken } from "./tokenFunctions";

class Requests {
  _showNetworkErrorAlert(status) {
    let error;
    if (status >= 400 && status < 500) {
      alertError("A client network error occurred.");
      error = "A client network error occurred.";
    } else if (status >= 500 && status < 600) {
      alertError("Platform server error.");
      error = "Platform server error.";
    } else {
      alertError("A connection error occurred.");
      error = "A connection error occurred.";
    }
    throw new Error(error);
  }

  async _post(url, args, headers) {
    try {
      const res = await axios.post(url, args, {
        headers,
        cancelToken: headers.cancelToken,
      });
      return res;
    } catch (error) {
      if (error?.message !== ABORTED_REQUEST) {
        this._showNetworkErrorAlert(error?.response?.status);
      }
    }
  }

  async _put(url, body, headers) {
    try {
      const res = await axios.put(url, body, { headers });
      return res;
    } catch (error) {
      if (error?.message !== ABORTED_REQUEST) {
        this._showNetworkErrorAlert(error?.response?.status);
      }
    }
  }

  async _delete(url, headers) {
    try {
      const res = await axios.delete(url, {
        headers,
      });
      return res;
    } catch (error) {
      if (error?.message !== ABORTED_REQUEST) {
        this._showNetworkErrorAlert(error?.response?.status);
      }
    }
  }

  async _get(url, args, headers) {
    try {
      const res = await axios.get(url, {
        ...args,
        headers,
      });
      return res;
    } catch (error) {
      if (error?.message !== ABORTED_REQUEST) {
        this._showNetworkErrorAlert(error?.response?.status);
      }
    }
  }

  async login({ email, password, headers }) {
    const loginUser = await this._post(LOGIN_URL, { email, password }, headers);
    return loginUser;
  }

  async signup({ username, email, password, headers }) {
    const signupUser = await this._post(
      SIGNUP_URL,
      {
        username,
        email,
        password,
      },
      headers
    );
    return signupUser;
  }

  async getInfoUserLogged(token, cancelToken = null) {
    const userInfoLogged = await this._get(
      GET_INFO_USER_LOGGED,
      {
        cancelToken,
      },
      {
        authorization: `Bearer ${token}`,
      }
    );
    return userInfoLogged?.data?.data?.user;
  }

  async validateToken(token, cancelToken = null) {
    const isValidToken = await this._get(
      VALIDATE_TOKEN_URL,
      {
        cancelToken,
      },
      {
        authorization: `Bearer ${token}`,
      }
    );

    return isValidToken?.data?.ok;
  }

  async getAllMovies() {
    const movies = await this._get(MOVIES_ALL);
    return movies?.data?.data?.movies;
  }

  async getGenrerMovie(genrer) {
    const movies = await this._get(MOVIES_GENRERS_URL(genrer));
    return {
      ...movies?.data?.data,
      genrer,
    };
  }

  async getAllGenrersMovies() {
    const moviesGenrersPromises = [];

    for (const genrer of MOVIES_GENRERS) {
      moviesGenrersPromises.push(this.getGenrerMovie(genrer));
    }

    return axios.all(moviesGenrersPromises);
  }

  async getInfoMovieId(id, cancelToken = null) {
    const movie = await this._get(MOVIE_ID_URL(id), { cancelToken });
    return movie?.data?.data?.movie;
  }

  // ============ Favorite Movies ===============
  async setFavoriteMovie(userId, movieId) {
    const favoriteMovie = await this._post(
      SET_FAVORITE_MOVIE,
      {
        userId,
        movieId,
      },
      {
        authorization: `Bearer ${getToken()}`,
      }
    );
    return favoriteMovie;
  }

  async getFavoriteMoviesUser(userId) {
    const favoriteMoviesUser = await this._get(
      GET_FAVORITE_MOVIES_USER(userId),
      {},
      {
        authorization: `Bearer ${getToken()}`,
      }
    );
    return favoriteMoviesUser?.data?.data;
  }

  async getFavoriteMoviesByIds(moviesIds) {
    const promises = [];
    for (const movieId of moviesIds) {
      promises.push(this.getInfoMovieId(movieId));
    }

    const moviesInfo = await Promise.all(promises);
    return moviesInfo;
  }

  async getAllFavoriteMovies(idUser) {
    const movies = await this.getFavoriteMoviesUser(idUser);
    const favoriteMoviesArray = await this.getFavoriteMoviesByIds(movies);
    return favoriteMoviesArray;
  }

  // ============ comments ================
  async getMovieComments(movieId, skip = 0, limit = 0) {
    const comments = await this._get(
      `${COMMENTS_URL}?movieId=${movieId}&skip=${skip}&limit=${limit}`,
      {},
      { authorization: `Bearer ${getToken()}` }
    );
    return comments?.data?.data?.comments;
  }

  async createMovieComment(movieId, text) {
    const created = await this._post(
      `${COMMENTS_URL}/create`,
      { text, movieId },
      { authorization: `Bearer ${getToken()}` }
    );
    return created?.data?.ok;
  }

  async createMovieCommentReply(parentCommentId, text) {
    const created = await this._post(
      `${COMMENTS_URL}/reply`,
      { parentCommentId, text },
      { authorization: `Bearer ${getToken()}` }
    );
    const { ok, data } = created.data;
    return { ok, data };
  }

  async updateMovieComment(commentId, newText) {
    const updated = await this._put(
      `${COMMENTS_URL}/update-comment`,
      { commentId, newText },
      { authorization: `Bearer ${getToken()}` }
    );
    return updated?.data?.ok;
  }

  async updateMovieCommentReply(parentCommentId, index, text) {
    const updated = await this._put(
      `${COMMENTS_URL}/update-reply`,
      { parentCommentId, index, newText: text },
      { authorization: `Bearer ${getToken()}` }
    );
    const { ok, data } = updated.data;
    return { ok, data };
  }

  async deleteMovieComment(commentId) {
    const deleted = await this._delete(
      `${COMMENTS_URL}/delete-comment?commentId=${commentId}`,
      { authorization: `Bearer ${getToken()}` }
    );
    console.log("borró comment ???", deleted.data);
    return deleted?.data?.ok;
  }

  async deleteMovieCommentReply(parentCommentId, index) {
    const deleted = await this._delete(
      `${COMMENTS_URL}/delete-reply?parentCommentId=${parentCommentId}&index=${index}`,
      { authorization: `Bearer ${getToken()}` }
    );
    console.log("borró reply ???", deleted.data);
    return deleted?.data?.ok;
  }
}

export default new Requests();
