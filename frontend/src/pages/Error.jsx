import React from "react";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  return (
    <PageContent title={title} message={message}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
