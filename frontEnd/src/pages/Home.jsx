import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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


  const navigate = useNavigate();

  return (
    <div className='App'>
      {console.log(lists)}
      {lists.map((list, index) => {
        return (
          <ul key={list.id}
            className="post"
            onClick={() => {
              navigate(`post/byId/${list.id}`);
            }}>
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