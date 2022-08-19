import React from "react";
import styled from "styled-components";

export const Adulto = styled.p`
  color: black;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  background-color: skyblue;
  padding: 1.5em;
  border-radius: 2em;
  transition: 0.5s all;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  :hover {
    background-color: bisque;
  }
`;

export default class AdultosHeader extends React.Component {
  render() {
    return (
      <>
        <Adulto>Adultos</Adulto>
      </>
    );
  }
}
