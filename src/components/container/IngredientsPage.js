import React, { Component } from 'react'
import VisibleIngredientsList from "./VisibleIngredientsList";

export default class IngredientsPage extends Component {
  render () {
    return (
      <React.Fragment>
        <VisibleIngredientsList />
      </React.Fragment>
    );
  }
}
