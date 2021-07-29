import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media {
    flex-flow: column nowrap;
    background-color: #282c34;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    
    top: 0;
    right: 0;
    height: 100vh;
    width: 20vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
const RightNav = (props) => {
  console.log(props.func);
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contract" }
  ];

  const clickHandler = () => {
    props.func();
  }

  return (
    <Ul open={props.open}>
      {menus.map((menu, index) => {
        return (
          <li><Link to={menu.path} key={index} onClick={() => clickHandler()}>{menu.name}</Link></li>
        );
      })}
    </Ul>
  )
}

export default RightNav