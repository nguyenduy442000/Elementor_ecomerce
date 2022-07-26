import React from 'react';

import {FiSearch} from 'react-icons/fi';
import {FiUser} from'react-icons/fi'
import {FiShoppingBag} from 'react-icons/fi';
import Logo from'../../.././assets/logo/logo.svg';
import "./Navigation.scss"
const Navigation = () => {
  return (
    <div>
    <div className='navigation'>
     <ul >
       <li>
       <span >Home</span>
       </li>
       <li style={{padding: '0 30px'}}><span>Catalogue</span></li>
       <li><span>About</span></li>
       <li style={{padding: '0 30px'}}><span>Blog</span></li>
       <li><span>Info</span></li>
     </ul>


     <div style={{width:'20%',textAlign:'center'}}>
     <img src={Logo} alt="Logo" width="150px" height="32.48px"/>
     </div>
    
     <div style={{fontSize:'1.8rem',width:'40%',textAlign:'right'}}>
       <FiSearch/>
      <span style={{padding: '0 20px'}}><FiUser/></span> 
       <FiShoppingBag/>
     </div>
    
    </div>
    
    
    </div>
  )
}

export default Navigation