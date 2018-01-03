import React, { Component } from 'react'
import { Button } from "semantic-ui-react";
import FormRecipe from './FormRecipe';

export default class AddRecipe extends Component {

  constructor () {
    super();
    this.state = {
      isEditing: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  }

  render () {
    const { props } = this;
    const { isEditing } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>{ !isEditing ? 'Add a recipe' : 'Cancel' }</Button>
        { isEditing && <FormRecipe { ...props }/> }
      </React.Fragment>
    );
  }

}
