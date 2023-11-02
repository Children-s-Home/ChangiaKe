import { redirect } from "react-router-dom";

export async function loginUser(email, password) {
  const user1 = {
    email: "user1@gmail.com",
    password: "password1",
  };

  const foundUser =
    email === user1.email && password === user1.password ? user1 : null;

  if (!foundUser) {
    const response = {
      status: 401,
      message: "No user with those credentials found",
    };
    return response;
  } else {
    localStorage.setItem("loggedin", true);
    foundUser.password = null;
    const response = {
      status: 200,
      message: "User logged in successfully",
      user: foundUser.email,
    };

    return response;
  }
}

export function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");
  if (!isLoggedIn) {
    return redirect(`/logIn?message=You must log in first!`);
  }
  return null;
}
