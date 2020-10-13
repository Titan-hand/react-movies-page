export function saveToken(token) {
  sessionStorage.setItem("token", token);
}

export function deleteToken() {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
  }
}

export function existToken() {
  return sessionStorage.getItem("token") !== null;
}
