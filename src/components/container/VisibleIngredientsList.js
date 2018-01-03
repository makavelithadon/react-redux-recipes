import React, { Component } from 'react';
import IngredientsList from "./../presentational/IngredientsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})

export default connect(
  mapStateToProps,
  null
)(IngredientsList)
