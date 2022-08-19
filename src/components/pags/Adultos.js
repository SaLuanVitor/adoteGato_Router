import React from "react";
import styled from "styled-components";
import talles from "/src/img/Talles.jpg";
import laranja from "/src/img/Laranja.webp";
import tobias from "/src/img/Tobias.jpg";

export const Infos = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const FigureInfo = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
  border: solid gray;
  border-radius: 2.2em;
  img {
    width: 25em;
    height: 20em;
    object-fit: auto;
    border-radius: 2em;
  }
`;

export const Figcaption = styled.figcaption`
  font-size: 2rem;
  flex-wrap: wrap;
  width: 10em;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export default class Adultos extends React.Component {
  render() {
    return (
      <>
        <Infos>
          <FigureInfo>
            <img src={talles} />
            <Figcaption>
              <p>Nome: Talles</p>
              <p>Idadae: 5 anos</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
          <FigureInfo>
            <img src={laranja} />
            <Figcaption>
              <p>Nome: Laranja</p>
              <p>Idadae: 3 anos</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
          <FigureInfo>
            <img src={tobias} />
            <Figcaption>
              <p>Nome: Tobias</p>
              <p>Idadae: 2 anos</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
        </Infos>
      </>
    );
  }
}
