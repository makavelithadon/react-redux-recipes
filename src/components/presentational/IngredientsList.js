import React from 'react'
import { List } from "semantic-ui-react"
import Ingredient from './Ingredient'

export default ({
  ingredients
}) => {
  return (
    <List divided verticalAlign='middle'>
      {
        ingredients
          .map(ingredient => {
            console.log('ingredient', ingredient);
              return (
                <Ingredient
                  key={ingredient.name}
                  { ...ingredient }
                />
              )
            }
          )
      }
    </List>
  );
}
