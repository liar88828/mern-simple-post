import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Routes, Route, Link
} from 'react-router-dom';
import './style.css';
import { Home } from './pages/Home';

function App() {
	return (
		<div>
			<Router>
				<Link to='/createPost'>Create post</Link>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/createPost' element={<Home />} />
					<Route path='*' element={<div><h1>NOTTING</h1></div>} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
