import Requests from "./Resquests";

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
    sessionStorage.getItem("token").length
  );
}

export async function isValidToken(token) {
  if (!token) {
    return false;
  }
  const _isValidToken = await Requests.validateToken(token);
  return _isValidToken;
}