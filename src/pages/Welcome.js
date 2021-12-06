import { Route } from "react-router-dom";

import React from "react";

export const Welcome = (props) => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};
