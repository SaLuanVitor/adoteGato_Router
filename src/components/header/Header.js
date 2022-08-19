import React from "react";
import styled from "styled-components";
import AdultoHeader from "./nav/AdultosHeader.js";
import FilhotesHeader from "./nav/FilhotesHeader.js";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  border: solid black;
  width: 100px;
`;

export const Adulto = styled.p`
  color: black;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Nav>
        <AdultoHeader />
        <FilhotesHeader />
      </Nav>
    );
  }
}
