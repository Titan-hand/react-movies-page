import axios from "axios";
import {
  LOGIN_URL,
  SIGNUP_URL,
  GET_INFO_USER_LOGGED,
  VALIDATE_TOKEN_URL,
} from "../Config/api";

import { MOVIES_ALL, MOVIES_GENRERS_URL, MOVIES_GENRERS } from "../Config/apiMovies";
import { alertError } from "./notifications";

class Requests {
  _showNetworkErrorAlert(status) {
    if (status >= 400 && status < 500) {
      alertError("A client network error occurred.");
    } else if (status >= 500 && status < 600) {
      alertError("Platform server error.");
    } else {
      alertError("A connection error occurred.");
    }
  }

  async _post(url, args, headers) {
    try {
      const res = await axios.post(
        url,
        {
          ...args,
        },
        {
          ...headers, // here I receive the headers (including the cancellation token)
        }
      );
      return res;
    } catch (error) {
      this._showNetworkErrorAlert(error?.response?.status);
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
      this._showNetworkErrorAlert(error?.response?.status);
    }
  }

  async login({ email, password, headers }) {
    // here I pass the parameters with the headers (and the cancellation token)
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
      headers // Here same as the previous ones
    );
    return signupUser;
  }

  async getInfoUserLogged(token) {
    const userInfoLogged = await this._get(
      GET_INFO_USER_LOGGED,
      {},
      {
        authorization: `Bearer ${token}`,
      }
    );
    return userInfoLogged?.data?.data?.user;
  }

  async validateToken(token) {
    const isValidToken = await this._get(
      VALIDATE_TOKEN_URL,
      {},
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

  async getAllGenrersMovies(){
    const moviesGenrersPromises = [];

    for (const genrer of MOVIES_GENRERS) {
      moviesGenrersPromises.push(this.getGenrerMovie(genrer));
    }

    return axios.all(moviesGenrersPromises)
  }
}

export default new Requests();
