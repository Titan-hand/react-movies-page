import Requests from "./Resquests";

export function getToken() {
  return sessionStorage.getItem("token");
}

export function saveToken(token) {
  sessionStorage.setItem("token", token);
}

export function deleteToken() {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
  }
}

export function existToken() {
  return (
    sessionStorage.getItem("token") !== null &&
    sessionStorage.getItem("token").length > 0
  );
}

export async function isValidToken(token, cancelToken) {
  if (!existToken()) {
    return false;
  }
  const _isValidToken = await Requests.validateToken(token, cancelToken);
  return _isValidToken;
}
