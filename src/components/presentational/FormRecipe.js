import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

export default class FormRecipe extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      ingredient: '',
      step: ''
    }
  }
  render () {
    const { ingredients } = this.props;
    let ing = ingredients.map((i, index) => ({
      ...i,
      key: index,
      value: i.name,
      text: i.name
    }))
    
    return (
      <form action="">
        <label className="label" htmlFor="recipeName">Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="recipeName"
          id="recipeName"
        />
        <br/>
        <div className="input-field">
          <label
            className="label"
            htmlFor="step1"
          >Step 1
          </label>
          <br />
          <textarea
            id="step1"
            cols="22"
            rows="4"
          />
        </div>
        <br />
        <Dropdown placeholder='Ingrédient' search selection options={ing} />
        <br />
        <Button className="submit-button">Save</Button>
      </form>
    );
  }
}
