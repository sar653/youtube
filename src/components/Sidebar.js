import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuopen=useSelector(store=>store.app.isMenuOpen)


//early return

  if(!isMenuopen) return null
  return (
    <div className='p-5 shadow-lg w-48'>
      
      
      <ul>
        <li> <Link to="/" >home</Link></li>
        
        <li>shorts</li>
        <li>videos</li>
        <li>live</li>
      </ul>
      <h1 className='font-bold pt-5'>subscriptions</h1>
      <ul>
        <li>music</li>
        
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>music</li>
        
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    
    
    
    </div>
  )
}

export default Sidebar