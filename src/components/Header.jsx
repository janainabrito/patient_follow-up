import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/img/logo.png'
import '../assets/css/components/header.css'
import {
  UncontrolledCollapse,
  Nav,
} from "reactstrap";

const Header = () => {
  return (
    <header className="header">

      <div className="header-container">
        <Link to="/" className="flex flex--center">
          <img className="header__logo" src={image} alt="Logo Patient Follow-Up" />
        </Link>
      </div>

      <div className="menu-hamburguer">
        <button
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="menu-hamburguer__icon"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
        </button>

        <UncontrolledCollapse navbar toggler="#navbar-info">
          <Nav className="pl-2" navbar>
            <Link className="mb-1" to="/users/new">New User</Link>
            <Link className="mb-1" to="/users">Users</Link>
            <Link className="mb-1" to="/about">About</Link>
            <Link to="#" className="menu-item--login">Login</Link>
          </Nav>
        </UncontrolledCollapse>
      </div>

      <nav className="menu-header">
        <ul className="menu-itens">
          <li><Link to="/users/new" className="menu-item">New User</Link></li>
          <li><Link to="/users" className="menu-item">Users</Link></li>
          <li><Link to="/about" className="menu-item">About</Link></li>
          <li><Link to="#" className="menu-item menu-item--login">Login</Link></li>
        </ul>
      </nav>

      <div className="menu-header-background"></div>
    </header>
  )
}

export default Header