import React from "react";
import styled from "styled-components";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
const Nav = styled.nav`
  background: ${({ dark }) => (dark ? "#2b3945" : "#f1f1f1ff")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#111517")};
  padding: 1rem 2rem;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s, color 0.3s;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  

`;

const Button = styled.button`

  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
const Subtitle = styled.p`
  font-family: "Smooch Sans", sans-serif;
  position: left;
  font-size: 13px;
`;
export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Nav dark={darkMode}>
      <Title>Country finderBy <br /> <Subtitle>Amirbek and Farruxbek</Subtitle></Title>
      
      <Button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? <MdSunny /> : <BsFillMoonStarsFill />}
      </Button>
    </Nav>
  );
}
