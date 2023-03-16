import React from 'react';
import MenuItem from '@mui/material/MenuItem';

function MenuList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <MenuItem key={index} onClick={props.onItemClick}>
          {item}
        </MenuItem>
      ))}
    </ul>
  );
}

export default MenuList;
