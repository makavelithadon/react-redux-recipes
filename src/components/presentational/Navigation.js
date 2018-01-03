import React from 'react'
import { Menu } from "semantic-ui-react";

export default ({
  tabs,
  activeItem,
  handleClick
}) => {
  return (
    <Menu>
      {
        tabs
          .map((tab, index) => 
            <Menu.Item
              key={tab}
              name={tab}
              active={activeItem === tab}
              onClick={() => handleClick(index)}
            >
              { tab }
            </Menu.Item>
          )
      }
    </Menu>
    
  );
}
