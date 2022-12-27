import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Routes, Route, Link
} from 'react-router-dom';
import './style.css';
import { Home } from './pages/Home';
import { CreatePost } from './pages/CreatePost';

function App() {
	return (
		<div>
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/createPost'>Create post</Link>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/createPost' element={<CreatePost />} />
					<Route path='*' element={<div><h1>NOTTING</h1></div>} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
