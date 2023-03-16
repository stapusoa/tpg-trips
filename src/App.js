import React from 'react';
import './App.css';
import Navbar from './components/navbar/index.js';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/index.js';
import Trips from './pages/trips.js';
import About from './pages/about.js';
import FAQ from './pages/faq.js';
import Support from './pages/support.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
	  primary: {
		main: '#125E5C',
	  },
	  success: {
		main: '#4CAF50',
	  },
	},
  });
  
function App() {
return (
	<ThemeProvider theme={theme}>

		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/trips' element={<Trips />} />
				<Route path='/about' element={<About/>} />
				<Route path='/faq' element={<FAQ/>} />
				<Route path='/support' element={<Support/>} />
			</Routes>
			</Router>
	</ThemeProvider>
);
}

export default App;
