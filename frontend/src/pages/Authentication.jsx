import React, { Fragment } from "react";
import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const Authentication = () => {
  return (
    <Fragment>
      <AuthForm />;
    </Fragment>
  );
};

export default Authentication;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  if (mode === "signup") authData.passwordConfirm = data.get("passwordConfirm");
  let response;
  response = await fetch("http://localhost:8000/api/v1/users/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  if (
    response.status === 422 ||
    response.status === 401 ||
    response.status === 403
  ) {
    return await response.json();
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + 600);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/");
}
