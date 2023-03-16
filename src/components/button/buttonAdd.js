import React from 'react';
import '../../styles/colors.css';
import './button.css';
import '../../styles/elevation.css';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function ButtonAdd(props) {
  return (
    <Button 
        variant="contained" 
        startIcon={<AddRoundedIcon />}
        className="button-lg button-contained" // updated className
        onClick={props.onClick}>{props.label}
        CREATE TRIP
    </Button>
  );
}


export default ButtonAdd;

