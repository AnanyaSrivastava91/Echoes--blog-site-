import React from 'react'
import { Link } from 'react-router-dom' 

import User from '../img/ananya.jpg'
import Post from '../img/meter.jpg'
import Edit from '../img/edit.jpeg'
import Delete from '../img/delete.jpeg'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={Post} alt="" />
        <div className="user">
        <img src={User} alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
         <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis quas ex, numquam vitae at molestiae accusantium alias. Placeat magni commodi facere, illum explicabo iure labore veniam et sed fugiat magnam molestias? Tempore nam expedita eos molestias neque exercitationem tempora temporibus quibusdam praesentium possimus omnis, obcaecati recusandae ea minus. Blanditiis distinctio quae accusantium asperiores quam, beatae est architecto incidunt. Provident similique cupiditate sequi officiis sapiente modi tempore. Inventore dolor maxime sequi officia voluptatibus molestias quas rem iusto, quod quae distinctio unde officiis, quasi nulla sed id labore doloremque. Aliquid ipsa ratione voluptate illum consectetur doloremque eveniet alias veritatis soluta deserunt.</p>
      </div>
      <Menu/>

    </div>
  )
}

export default Single