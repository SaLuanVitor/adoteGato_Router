import React from "react";
import styled from "styled-components";
import carlinho from "/src/img/Carlinhos.jpg";
import cesar from "/src/img/Cesar.jpg";

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
export default class Filhotes extends React.Component {
  render() {
    return (
      <>
        <Infos>
          <FigureInfo>
            <img src="https://www.ospaparazzi.com/imagem/201207/03145736.jpg" />
            <Figcaption>
              <p>Nome: Lion</p>
              <p>Idadae: 4 meses</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
          <FigureInfo>
            <img src={carlinho} />
            <Figcaption>
              <p>Nome: Carlinhos</p>
              <p>Idadae: 3 meses</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
          <FigureInfo>
            <img src={cesar} />
            <Figcaption>
              <p>Nome: Cesar</p>
              <p>Idadae: 2 meses</p>
              <button>Adotar</button>
            </Figcaption>
          </FigureInfo>
        </Infos>
      </>
    );
  }
}
