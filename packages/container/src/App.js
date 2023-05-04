import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
