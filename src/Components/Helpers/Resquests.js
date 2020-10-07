import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../Config/api";
import { alertDanger } from "./notifications";

class Requests {
  async _post(url, args) {
    try {
      const res = await axios.post(url, {
        ...args,
      });
      return res;
    } catch (error) {
      console.warn(error);
      alertDanger("A connection error occurred.");
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
}

export default new Requests();
