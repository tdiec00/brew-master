import React from "react"
import {StyledNavbar} from "./styles/Navbar.styled"
import {StyledNavbarLink} from "./styles/NavbarLink.styled"
const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLink to="/">Home Page</StyledNavbarLink>
      <StyledNavbarLink to="/favorites">Favorites List</StyledNavbarLink>
    </StyledNavbar>
  )
}

export default Navbar
