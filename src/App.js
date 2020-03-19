import React, { useState, useEffect } from "react";
import HomePage from "./Components/Home";
import RecipesList from "./Components/RecipesList";
import { Route } from "react-router-dom";

const App = props => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://whispering-tor-94317.herokuapp.com/recipes/");
      res
        .json()
        console.log(res)
        .then(res => setRecipes(res))
        .catch(err => err);
    }
    fetchData();
  });

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/recipes"
        render={routerProps => <RecipesList {...routerProps} />}
      />
    </>
  );
};

export default App;
