import React from 'react'
import image from '../assets/img/logo-1.png'
import '../assets/css/404.css'

const Pagina404 = () => {
  return (
    <main className="container flex flex--center flex--column" >
      <p className="notfound-texto">
        Ops! Page not found...
      </p>
      <img className="logo-image" src={image} alt="ilustração logo" />
    </main>
  )
}

export default Pagina404