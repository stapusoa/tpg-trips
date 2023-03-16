import React from 'react';
import '../../App.css';
import './navbar.css';
import '../../index.css';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { NavLink }
	from "./NavbarElements";
import List from '@mui/material/List';



function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    

  
    return (
        <>
            <AppBar position="fixed" alignContent="center" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(5px)', padding: '0 4vw' }}>
                <Toolbar sx={{ height: '3vh', display: 'flex', justifyContent: 'space-between', paddingTop: '0.5vh' }}>
                    <div className="navbar-left" sx={{ alignContent: 'center' }}>
                        <NavLink to="/" activeStyle>
                            <img className="logo" src={process.env.PUBLIC_URL + '/logo-tpg.svg'} alt="TPG" />
                        </NavLink>
                        <div className="App-link">
                            <NavLink to="/trips" activeStyle>My Trips</NavLink>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <IconButton sx={{ color: '#000000' }}
                            size="large"
                            edge="end"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuClick}
                            color="inherit"
                            >
                            <MenuIcon />
                        </IconButton>
                        <Box>
                            <Menu 
                                PaperProps={{
                                    sx: { 
                                        borderRadius: '12px',
                                        padding: '0',
                                        border: '1px solid rgba(141, 153, 174, 0.20)',
                                        boxShadow: 'none', 
                                        WebkitBoxShadow: '0px 1px 0px rgba(0, 0, 0, 0.15)',
                                        
                                    },
                                }}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleMenuClose}
                            >
                                <List disablePadding>
                                    <MenuItem sx={{ padding: '2vh 4vw 2vh 2vw' }}>
                                        <NavLink to="/about" activeStyle>About</NavLink>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '2vh 4vw 2vh 2vw' }}>
                                        <NavLink to="/trips" activeStyle>Trips</NavLink>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '2vh 4vw 2vh 2vw' }}>
                                        <NavLink to="/faq" activeStyle>FAQ</NavLink>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '2vh 4vw 2vh 2vw' }}>
                                        <NavLink to="/support" activeStyle>Support</NavLink>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '2vh 4vw 2vh 2vw' }}>
                                        <NavLink to="/" activeStyle>Sign In</NavLink>
                                    </MenuItem>
                                </List>
                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </>
        );
}


export default Navbar;


