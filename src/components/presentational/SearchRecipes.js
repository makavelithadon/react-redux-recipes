import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default ({
  onSearch
}) => {
  let input;
  return (
    <input
      type="text"
      ref={node => input = node}
      onChange={() => onSearch(input.value)}
      className="input--search"
      placeholder="Search for a recipe..."
    />
  );
}
