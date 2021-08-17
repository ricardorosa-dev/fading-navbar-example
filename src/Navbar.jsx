import React, { useState } from 'react'
import './App.scss'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  
  window.addEventListener('scroll', changeBackground);
  
  return (
    <nav className={navbar ? 'Nav active' : 'Nav'}>
      <ul>
        <li>Logotipo</li>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Galeria</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}

