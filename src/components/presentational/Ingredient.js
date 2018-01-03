import React from 'react'
import { List, Button } from "semantic-ui-react";

export default ({
  name,
  price,
  allergens
}) => {
  return (
    <List.Item className="list ingredient">
      <List.Content floated='right'>
        <Button>See</Button>
      </List.Content>
      <List.Content className="name">
        <span className="ingredient__name">{ name }</span>
        <span className="ingredient__price">{ price } €</span>
        <span className="ingredient__allergens">{ allergens.map(allergen => `${ allergen }`).join(' ') }</span>
      </List.Content>
    </List.Item>
  );
}
