import React, { Component } from 'react'
import Navigation from "./../presentational/Navigation";
import RecipesPage from "./RecipesPage";
import IngredientsPage from "./IngredientsPage";

export default ({
  page,
  tabs,
  onChangePage
}) => {
  return (
    <main className="App-container">
      <Navigation
        tabs={tabs}
        activeItem={page}
        handleClick={onChangePage}
    />
      {
        page === 'Recipes' ?
          <RecipesPage />
          : <IngredientsPage />
      }
    </main>
  );
}
