import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 0px solid #f1f1f1;
  padding: 0 20px;
  justify-content: space-between;
  
  .logo {
    padding: 15px 0;
  }
`

const Navbar = (props) => {
  return (
    <Nav>
      <div className="logo">
        Junsam Ji
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar