import React from 'react';
import '../../styles/colors.css';
import './button.css';
import '../../styles/elevation.css';
import Button from '@mui/material/Button';

function ButtonAI(props) {
  return (
    <Button 
        variant="contained" 
        className="button-lg button-contained" // updated className
        onClick={props.onClick}>{props.label}
        GET INSPIRATION
    </Button>
  );
}


export default ButtonAI;

