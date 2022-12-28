import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Routes, Route, Link
} from 'react-router-dom';
import './style.css';
import { Home } from './pages/Home';
import { CreatePost } from './pages/CreatePost';
import { Post } from './pages/Post';

function App() {
	return (
		<div className='App'>
			<Router>
				<div className="navbarr">
					<Link to='/'>Home</Link>
					<Link to='/createPost'>Create post</Link>
				</div>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/createPost' element={<CreatePost />} />
					<Route path='/post/byId/:id' element={<Post />} />
					<Route path='*' element={<div><h1>NOTTING</h1></div>} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
