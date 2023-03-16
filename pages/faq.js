import React, { useState } from 'react';
import ButtonAdd from '../components/button/buttonAdd.js';
import Menu from '../components/popover/menu.js';
import Dialog2 from '../components/dialog/dialog.js';
import '../App.css';


function FAQ() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
         <div className="App-container">
            <div className='container'>
                <ButtonAdd />
                <Menu items={items} />
                <Dialog2 />
            </div>
        </div>
    </div>
  );
}

export default FAQ;
