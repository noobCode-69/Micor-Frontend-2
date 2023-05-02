import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(<App/>, el);
};

// If we are in development and in isolation
// call mount immdiately
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");
  if (root) {
    mount(root);
  }
}

// We are running throught container
// and we should export the mount function

export { mount };
