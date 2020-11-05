/**
 * integration testing for login
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "@testing-library/react";
// login container
import LoginContainer from "../LoginContainer";
// redux
import { Provider } from "react-redux";
import store from "../../../../Redux/Store/Store";
// types
import { RESET_STORE } from "../../../../Redux/Types/resetTypes";
// mocks
import RequestMock from "../__mocks__/Request";
import axiosMock from "axios";

configure({ adapter: new Adapter() });

describe("<LoginContainer />", () => {
  // clean store when test is finished
  afterAll(() => {
    store.dispatch({ type: RESET_STORE });
  });

  // variable to use in all tests
  let wrapper;

  test("render without crashing", () => {
    wrapper = mount(
      <Router>
        <Provider store={store}>
          <LoginContainer />
        </Provider>
      </Router>
    );
    expect(wrapper ? true : false).toBe(true);
  });

  test("set input data with form inputs", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { name: "email", value: "email@mail.com" },
      });

    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "password", value: "password123" },
      });

    expect(wrapper.find("input").at(0).prop("value")).toBe("email@mail.com");
    expect(wrapper.find("input").at(1).prop("value")).toBe("password123");
  });

  test("submit form and save user info in the reducer", async () => {
    // this code will update the component state asynchronously
    await act(async () => {
      wrapper.find("form").simulate("submit");
    });

    // cancel token called 1 time
    expect(axiosMock.CancelToken.source.mock.calls.length).toBe(1);
    // login called with correct form data
    expect(RequestMock.login).toHaveBeenCalledWith(
      {
        email: "email@mail.com",
        password: "password123",
      },
      {
        cancelToken: "cancelToken123", // axios mock
      }
    );
    // the user data was requested
    expect(RequestMock.getInfoUserLogged).toHaveBeenCalledWith(
      "token123" // Request.js mock
    );
  });

  test("user info is saved in the reducer", () => {
    expect(store.getState().UserInformation).toEqual({
      currentUserInfo: { name: "John", lastName: "Doe" },
      isLoggedUser: true,
    });
  });
});
