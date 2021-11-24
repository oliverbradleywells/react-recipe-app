import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {


  const App_ID = "dd527ff2";
  const App_Key = "8ea26cbfb1b0373be508b79f58ff6301";

  const exampleReq =
    `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key${App_Key}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key${App_Key}`)

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))};

    </div>
  );
};

export default App;
