import axios from "axios";
import {
  LOGIN_URL,
  SIGNUP_URL,
  GET_INFO_USER_LOGGED,
  VALIDATE_TOKEN_URL,
} from "../Config/api.js";

import {
  MOVIES_ALL,
  MOVIES_GENRERS_URL,
  MOVIES_GENRERS,
  MOVIE_ID_URL,
} from "../Config/apiMovies.js";
import { alertError } from "./notifications.js";

class Requests {
  _showNetworkErrorAlert(status, fullError) {
    let error = "";
    console.log(fullError)
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
  }

  async _post(url, args, headers) {
    try {
      const res = await axios.post(url, args, headers);
      return res;
    } catch (error) {
      this._showNetworkErrorAlert(error?.response?.status, error);
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
      this._showNetworkErrorAlert(error?.response?.status, error);
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

  async getInfoUserLogged(token, cancelToken) {
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

  async validateToken(token, cancelToken) {
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

  async getInfoMovieId(id) {
    const movie = await this._get(MOVIE_ID_URL(id));
    return movie?.data?.data?.movie;
  }
}

export default new Requests();
