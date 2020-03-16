import React from "react";
import HomePage from "./Components/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/recipes" render={routerProps => ()} */}
    </>
  );
};

export default App;
