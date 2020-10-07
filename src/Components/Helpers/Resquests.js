import axios from "axios";
import { LOGIN_URL, SIGNUP_URL, GET_INFO_USER_LOGGED } from "../Config/api";
import { alertDanger } from "./notifications";

class Requests {
  _showNetworkErrorAlert(status) {
    if (status >= 400 && status < 500) {
      alertDanger("A client network error occurred.");
    } else if (status >= 500 && status < 600) {
      alertDanger("Platform server error.");
    } else {
      alertDanger("A connection error occurred.");
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
          ...headers,
        }
      );
      return res;
    } catch (error) {
      this._showNetworkErrorAlert(error.response.status);
    }
  }

  async _get(url, args, headers) {
    console.log(headers);
    try {
      const res = await axios.get(
        url,
        {
          ...args,
          headers
        }
      );
      return res;
    } catch (error) {
      this._showNetworkErrorAlert(error.response.status);
    }
  }

  async login(email, password) {
    const loginUser = await this._post(LOGIN_URL, { email, password });
    return loginUser;
  }

  async signup(username, email, password) {
    const signupUser = await this._post(SIGNUP_URL, {
      username,
      email,
      password,
    });
    return signupUser;
  }

  async getInfoUserLogged(token) {
    const userInfoLogged = await this._get(
      GET_INFO_USER_LOGGED,
      {},
      {
          authorization: `Bearer ${token}`,
      },
    );
    return userInfoLogged;
  }
}

export default new Requests();
