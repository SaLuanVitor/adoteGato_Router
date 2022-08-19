import React from "react";
import styled from "styled-components";

export const Filhote = styled.p`
  color: black;
  font-size: 1.2rem;
  border-radius: 2em;
  display: flex;
  justify-content: center;
  background-color: skyblue;
  padding: 1.5em;
  transition: 0.5s all;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  :hover {
    background-color: bisque;
  }
`;

export default class FilhotesHeader extends React.Component {
  render() {
    return (
      <>
        <Filhote>Filhotes</Filhote>
      </>
    );
  }
}
