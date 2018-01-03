import React from 'react'
import { List, Button } from "semantic-ui-react";

export default ({
  name,
  ingredients,
  recipes
}) => {
  return (
    <List.Item className="list recipe">
      <List.Content floated='right'>
        <Button>See</Button>
      </List.Content>
      <List.Content className="name">{ name }</List.Content>
    </List.Item>
  );
}
