import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tab.css';
import '../../App.css';
import '../card/card.css';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAI from '../button/buttonAI.js';
import '../tabs/tab.css';
import '../tabs/tabCard.css';
import "../popover/popover.css";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography sx={{ color: '#000000'}}>{children}</Typography>
                </Box>
                )}
        </div>
        );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabCard() {
    const [value, setValue, anchorEl, setAnchorEl] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Upcoming" {...a11yProps(0)} />
            <Tab label="Past" {...a11yProps(1)} />
            <Tab label="Cancelled" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div className="results">
                <div className="card-trip">
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/img/first-image.jpg'} alt="first img" />
                        <img src={process.env.PUBLIC_URL + '/img/second-image.jpg'} alt="second img" />
                    </div>
                    <div>
                        <div className="card-label">
                            <p className="no-trips-planned">UPCOMING</p>
                        </div>
                        <div className="card-header">
                            <p className="no-trips-planned">Los Angeles & Anaheim, CA </p>
                            <p className="no-trips-planned">March 23, 2023 - March, 28, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="cta">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69464?alt=media&token=51fdda4f-8e65-42b8-8388-e306d022f211"
                    alt="Not Found"
                    className="icon"
                    />
                    <div className="typographic-block-basic-1 clip-contents">
                    <p className="find-your-booking">Find your booking</p>
                    <p className="use-your-trip-number-and">
                        Use your trip number and email to look up a booking.
                    </p>
                    </div>
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69469?alt=media&token=47135388-2f5f-46bf-8f7d-91536fd0b28f"
                    alt="Not Found"
                    className="arrowforwardiosrounded"
                    />
                </div>
                <div className="cta-1">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69471?alt=media&token=bcc46303-26b6-4ebc-a5f1-2e19029d5c0f"
                    alt="Not Found"
                    className="icon-1"
                    />
                    <div className="typographic-block-basic-2 clip-contents">
                        <p className="create-atrip">Create a trip</p>
                        <p className="have-an-idea-for-atrip-bu">
                            Have an idea for a trip? Build it from scratch.
                        </p>
                    </div>
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69476?alt=media&token=31312aa8-fb92-476f-a372-20e99f2e8906"
                    alt="Not Found"
                    className="arrowforwardiosrounded-1"
                    />
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className="results">
                        <div className="card-inspiration">
                            <div className="empty-state">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69457?alt=media&token=a853ee9b-7c9c-4700-a6c8-5ae14a39475a"
                                    alt="Not Found"
                                    className="nosearchresult"
                                />
                                <div className="typographic-block-basic clip-contents">
                                    <p className="no-trips-planned">No trips planned</p>
                                    <p className="got-the-travel-bug-let-us">
                                    Got the travel bug? Let us help you plan where to go next.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <ButtonAI variant="contained" color="#042E30">GET INSPIRATION</ButtonAI>
                                </div>
                            </div>
                        </div>
                        <div className="cta">
                            <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69464?alt=media&token=51fdda4f-8e65-42b8-8388-e306d022f211"
                            alt="Not Found"
                            className="icon"
                            />
                            <div className="typographic-block-basic-1 clip-contents">
                            <p className="find-your-booking">Find your booking</p>
                            <p className="use-your-trip-number-and">
                                Use your trip number and email to look up a booking.
                            </p>
                            </div>
                            <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69469?alt=media&token=47135388-2f5f-46bf-8f7d-91536fd0b28f"
                            alt="Not Found"
                            className="arrowforwardiosrounded"
                            />
                        </div>
                        
                        </div>
                              </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="results">
                        
                        <div className="cta">
                            <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69464?alt=media&token=51fdda4f-8e65-42b8-8388-e306d022f211"
                            alt="Not Found"
                            className="icon"
                            />
                            <div className="typographic-block-basic-1 clip-contents">
                            <p className="find-your-booking">Find your booking</p>
                            <p className="use-your-trip-number-and">
                                Use your trip number and email to look up a booking.
                            </p>
                            </div>
                            <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vi3a3qpyaqq-3690%3A69469?alt=media&token=47135388-2f5f-46bf-8f7d-91536fd0b28f"
                            alt="Not Found"
                            className="arrowforwardiosrounded"
                            />
                        </div>
                        
                        </div>
                              </TabPanel>
    </Box>
  );
}