import React from "react";
import classes from "./AuthForm.module.css";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
const AuthForm = () => {
  const data = useActionData();
  const navigate = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signup";
  const isSubmitting = navigate.state === "submitting";
  return (
    <Form method="post" className={classes.form}>
      <h1>{!isLogin ? "Login" : "Create User Account"}</h1>
      {data && data.message && (
        <ul>
          <li style={{ listStyle: "none" }}>{data.message}</li>
        </ul>
      )}
      <label htmlFor="email">
        Email
        <input type="text" name="email" id="email" required />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" id="password" required />
      </label>
      {isLogin && (
        <label htmlFor="passwordConfirm">
          Confirm Password
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
          />
        </label>
      )}
      <div className={classes.actions}>
        <Link to={`?mode=${!isLogin ? "signup" : "login"}`} type="button">
          {!isLogin ? "Create new user" : "Login"}
        </Link>
        <button>{isSubmitting ? "Submitting" : "Save"}</button>
      </div>
    </Form>
  );
};

export default AuthForm;
