import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Post = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [dataNumber, setdataNumber] = useState('');
	// const initialValues = {
	//   title: '',
	//   postText: '',
	//   username: ''
	// };

	// const validationSchema = Yup.object().shape({
	//   title: Yup.string().required('tolong masukan judul'),
	//   postText: Yup.string().required('tolong masukan teks'),
	//   username: Yup.string().min(3).max(15).required('tolong masukan nama anda')
	// });

	// const onSubmit = (data) => {
	//   axios.post('http://localhost:5000/posts/', data)
	//     .then(res => {
	//       console.log('success' + data);
	//     });

	//   console.log(data);
	// };

	useEffect(() => {
		axios
			.get(`http://localhost:5000/posts/byId/${id}`) // akan mengambil data berdasarkan id Post
			.then((res) => {
				setdataNumber(res.data);
				// console.log(res.data);
			});
	}, []);

	return (
		<div className='postPage'>
			<div className='leftSide'>
				{/* {id} */}
				<ul key={dataNumber.id} className='post' id='individual'>
					<li className='title'>{dataNumber.title}</li>
					<li className='body'>{dataNumber.postText}</li>
					<li className='footerr'>{dataNumber.username}</li>
				</ul>
			</div>
			<div className='rightSide'>comment section</div>
		</div>
	);
};
