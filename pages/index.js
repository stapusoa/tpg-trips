import React from 'react';
import '../App.css';
import '../index.css';
import '../components/card/card.css';
import Box from '@mui/material/Box';



function Card(props) {
	return (
			<div className="card">
				<h1>{props.header}</h1>
                <h1>{props.content}</h1>
			</div>
	);
}



function Home() {
  return (
    <div className="App-container">
        <div className='container-hero'>
            <Box>
                <div className="card-wrap">
                    <img className="illustration-arrow" src={process.env.PUBLIC_URL + '/img/illustration-arrow.svg'} alt="arrow"  />
                    <img className="illustration-camera" src={process.env.PUBLIC_URL + '/img/illustration-camera.svg'} alt="camera"  />
                    <div className="container-header">
                        <Card header="Where's Your Next" content="Adventure?" />
                    </div>
                    <div className="input"></div>
                </div>
            </Box>
            <div className="photo-frame">
                <img 
                src={process.env.PUBLIC_URL + '/img/florida.jpg'} 
                alt="Not Found"
                className="photo" />
            </div>

        </div>
        <img
        src={process.env.PUBLIC_URL + '/img/container-background.svg'} 
        alt="Not Found"
        className="container-background"
        />
    </div>
		
  );
}


export default Home;