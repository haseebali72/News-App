import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const navMenu = [
        {name:'World', path:'/home'},
        {name:'Business', path:'/business'},
        {name:'Sports', path:'/sports'},
        {name:'Health', path:'/health'},
        {name:'Technology', path:'/tech'},
        {name:'Entertainment', path:'/enter'},
    ]
    
  return (
    <>
    <nav>
       <div className='logo'>LOGO</div>
       <div className='menu'>
        <ul>
            {navMenu.map(p=> <li><a href={p.path}>{p.name}</a></li>)}
        </ul>
       </div>
    </nav>
    </>
  )
}

export default Navbar