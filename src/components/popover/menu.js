import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import '../../styles/customStyles.css';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import '../../styles/colors.css';
import '../button/button.css';
import '../../styles/elevation.css';
import '../../styles/typography.css';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import InputTripNum from '../text-field/inputTripNum.js';
import InputEmail from '../text-field/inputEmail.js';
import MapOutlined from '@mui/icons-material/MapOutlined';
import ButtonAI from '../button/buttonAI.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        className="button-lg button-contained" // updated className
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        CREATE TRIP
      </Button>
      

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        sx={{ borderRadius: '12px' }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            border: '1px solid #E4E5EE',
            boxShadow: '0px 0px 20px rgba(4, 46, 48, 0.1)',
            borderRadius: '12px',
          }
        }}
      >
        <MenuItem onClick={handleOpenDialog}>
            <ListItemIcon>
                <ManageSearchRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Find trip with trip number</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleOpenDialog}>
            <ListItemIcon>
                <ModeEditRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Create trip</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleOpenDialog}>
          <ListItemIcon>
                <AutoFixHighRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Give me suggestions</ListItemText>
        </MenuItem>

      </Menu>
      <Dialog
        
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            padding: '0 2vw 6vh 2vw',
            backgroundColor: '#FCF9F6',
            borderRadius: '12px',
            boxShadow: '0px 0px 20px rgba(4, 46, 48, 0.1)'       }
        }}
        MuiBackdrop={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }
        }}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#FCF9F6', boxShadow: '0' }}>
          <Toolbar disableGutters="true"
            PaperProps={{
              sx: {
                padding: '0px'
              }
            }}>
            <IconButton
              edge="end"
              color="#35343C"
              onClick={handleCloseDialog}
              aria-label="close"
              sx={{ margin: '0 0 0 auto' }} // Add this line
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
            <div className="h5-grey" sx={{ marginLeft: '24px', paddingLeft: '24px', ml: 2, flex: 1, color: '#35343C'}} component="div">
              Find Trip
            </div>
        </AppBar>
        <div className='input-field-container'>
            <InputTripNum label="Trip Number" defaultText="00000000" />

            <InputEmail label="Email Address" defaultText="Email" />

        </div>
        <DialogActions
          sx={{ paddingTop: '32px'}}>
          <ButtonAI onClick={handleClose}>ADD TO PROFILE</ButtonAI>
        </DialogActions>
      </Dialog>
    </div>
  );
}
