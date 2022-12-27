import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [lists, setList] = useState([]);
  useEffect(() => {
    reqData();
  }, []);

  const reqData = () => {
    axios.get('http://localhost:5000/posts').then(res => {
      setList(res.data);
      // console.log(res.data);
    });
  };
  return (
    <div className='App'>
      <h1>	hahaha</h1>

      {console.log(lists)}
      {lists.map((list, index) => {
        return (
          <ul key={list.id} className="post">
            {/* <li> {index+1}</li> */}
            <li className='title'>
              {list.title}
            </li>
            <li className='body'>
              {list.username}
            </li>
            <li className='footers'>
              {list.postText}
            </li>
          </ul>
        );
      })}
    </div>
  );
};