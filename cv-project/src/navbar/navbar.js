import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h2>Logo</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar