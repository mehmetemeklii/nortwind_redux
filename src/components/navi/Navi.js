import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand >NorthWind Redux</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to={"/"} >Home</Link>
            </NavItem>
            <NavItem>
              <Link to={"/saveproduct"} >Save Product</Link>
            </NavItem>
           
            <CartSummary />
          </Nav>
          <NavbarText>Mehmet EMEKLİ React Example</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;