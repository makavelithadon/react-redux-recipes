import React, { Component } from 'react'
import SearchRecipes from './../presentational/SearchRecipes'
import RecipeList from "./../presentational/RecipeList";
import AddRecipe from './../presentational/AddRecipe';
import { connect } from "react-redux";

const getVisibleRecipes = (recipes, filter) => {
  if (!filter) return recipes;
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(filter.toLowerCase()));
  return filteredRecipes;
}

let RecipesPage = ({
  recipes,
  onSearch,
  ingredients
}) => {
  return (
    <React.Fragment>
      <SearchRecipes onSearch={onSearch}/>
      <RecipeList recipes={recipes}/>
      <AddRecipe ingredients={ingredients}/>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  recipes: getVisibleRecipes(
    state.recipes,
    state.filter
  ),
  ingredients: state.ingredients
})

const MapDispatchToProps = dispatch => ({
  onSearch: filter => {
    dispatch({
      type: 'SET_FILTER',
      filter
    })
  }
})

RecipesPage = connect(
  mapStateToProps,
  MapDispatchToProps
)(RecipesPage)

export default RecipesPage;
