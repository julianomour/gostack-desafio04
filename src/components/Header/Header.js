import React from 'react'
import facebookLogo from '../../assets/facebook-1.png'
import './Header.css'
function Header(){
  return (
    <header className="header"> 
      <img className="logo" src={facebookLogo} alt="Início" />
      <a className="link-perfil" href="#">Meu Perfil</a>
    </header>
  )
}

export default Header