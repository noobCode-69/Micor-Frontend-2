import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start up the app

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      // console.log("---");
      // console.log(pathname);
      // console.log("---");
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation
// call mount immdiately

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

// We are running throught container
// and we should export the mount function

export { mount };
