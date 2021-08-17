import React, { useState } from 'react'
import './App.scss'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <nav className="Nav">
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

