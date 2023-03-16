import React, { useState } from 'react';
import '../App.css';
import '../styles/colors.css';
import '../styles/typography.css';
import '../components/card/card.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TabCard from '../components/tabs/tabCard.js';
import '../components/tabs/tab.css';
import PositionedMenu from '../components/popover/menu.js';
import FullScreenDialog from "../components/dialog/dialog";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


const StyledImg = styled('img')({
  position: 'relative',
  top: (props) => props.top || '0', // Use a prop to conditionally set the top position
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function Trips() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
      handleDialogOpen();
    };
  
    const handleDialogOpen = () => {
        setSelectedMenuItem(null);
    };

    const handleDialogClose = () => {
      setSelectedMenuItem(null);
    };

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App-container">
            <div className='container'>
                <div className="App-header">
                    <div className="header-left">
                        <StyledImg src={process.env.PUBLIC_URL + '/img/illustration-arrow.svg'} alt="arrow" style={{ top: '0' }} />
                        <div className="container-header">
                        <h2 className='h2-secondary'>My Trips</h2>
                        </div>
                    </div>
                    <div className="header-right">
                        <PositionedMenu items={items} />
                        <FullScreenDialog />
                    </div>
                </div>
                <div className="main"> 
                    <div className="tab-container">  
                        <TabCard/> 
                        
                    </div>
                    
                </div>
            </div>
        <div className="background-color">
        </div>
        <div>
            <img
            src={process.env.PUBLIC_URL + '/img/background-trees.jpg'} 
            alt="Not Found"
            className="container-background"
            />
        </div>

        {selectedMenuItem && (
        <Dialog open onClose={handleDialogClose}>
          {(() => {
            switch (selectedMenuItem) {
              case "Find trip with trip number":
                return <FullScreenDialog 
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition} />;
              case "Edit":
                return <FullScreenDialog onClose={handleDialogClose} />;
              case "Fix":
                return <FullScreenDialog onClose={handleDialogClose} />;
              default:
                return null;
            }
          })()}
        </Dialog>
      )}

    </div>
		
  );
}


export default Trips;