const loginData = {
  usersLogin: localStorage.getItem("usersLogin") === "true" ? true : false,
  usersToken: localStorage.getItem("usersToken")
    ? localStorage.getItem("usersToken")
    : undefined,
};

export default loginData;
