import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const [lists, setList] = useState([]);
	useEffect(() => {
		reqData(); // jalanakan fungsi
	}, []);

	const reqData = () => {
		axios
			.get(
				'http://localhost:5000/posts', // alamat backEnd
			)
			.then((res) => {
				setList(res.data); // apa bila sukses maka akan meneriam data
				// console.log(res.data);
			});
	};

	const navigate = useNavigate();

	return (
		<div className='App'>
			{console.log(lists)}
			{lists.map((list) => {
				// loop akan mempilkan data
				return (
					<ul
						key={list.id}
						className='post'
						onClick={() => {
							navigate(`post/byId/${list.id}`);
						}}>
						{/* <li> {index+1}</li> */}
						<li className='title'>{list.title}</li>
						<li className='body'>{list.username}</li>
						<li className='footers'>{list.postText}</li>
					</ul>
				);
			})}
		</div>
	);
};
