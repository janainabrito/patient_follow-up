import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { SvgIcon } from "@material-ui/core";
import { Logo } from "../../assets/logo";

export default function Navbars() {

  return (
    <Navbar className="navbar-horizontal navbar-dark bg-primary mb-4" expand="lg" >
      <Container className="d-flex align-items-start justify-content-between">
        <NavbarBrand onClick={e => e.preventDefault()}>
          <SvgIcon viewBox="0 0 20 20" className="mx-1">
            <Logo></Logo>
          </SvgIcon>
          Patient Follow-Up
        </NavbarBrand>
        <UncontrolledCollapse navbar toggler="#navbar-info">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                onClick={e => e.preventDefault()}
              >
                <span className="nav-link-inner--text">New user</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                onClick={e => e.preventDefault()}
              >
                <span className="nav-link-inner--text">Users</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                onClick={e => e.preventDefault()}
              >
                <span className="nav-link-inner--text">Programs</span>
              </NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>

        <button
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </Container>
    </Navbar>
  );
}
