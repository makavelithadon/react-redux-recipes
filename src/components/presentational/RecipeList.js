import React from 'react'
import { List } from "semantic-ui-react"
import Recipe from './Recipe'

export default ({
  recipes,
}) => {
  return (
    <List divided verticalAlign='middle'>
      {
        recipes
          .map(recipe => {
              return (
                <Recipe
                  key={recipe.name}
                  { ...recipe }
                />
              )
            }
          )
      }
    </List>
  );
}
