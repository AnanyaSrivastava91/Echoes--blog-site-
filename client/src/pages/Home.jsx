import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <img className="img"
            src={post.img} alt="not loading" />
            
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
