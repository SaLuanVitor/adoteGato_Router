import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import genteLegal from "/src/img/GenteLegalGato.jpg";
import patinhas from "/src/img/patinhas.png";
import programaGato from "/src/img/gatoProgramador.jpg";
import carinho from "/src/img/gatoCarinho.jpg";
import estilo from "/src/img/gatoLindo.jpeg";

export const GlobalStyled = createGlobalStyle`
padding: 0;
margin: 0;
box-sizing: border-box;
Body{
  background-color: whitesmoke;
}
  `;

export const Body = styled.body`
  background-color: whitesmoke;
`;

export const Tittle = styled.div`
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export const Figure = styled.figure`
  width: 15em;
`;

export const Img = styled.img`
  border-radius: 2em;
  height: 20em;
`;

export const Pata = styled.img`
  width: 5em;
  transform: rotate(150deg);
  margin-top: 15em;
`;

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
  img {
    width: 25em;
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

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyled />
        <Body>
          <Tittle>
            <H1>Adote um gato</H1>
          </Tittle>
          <Container>
            <Figure>
              <Pata src={patinhas} alt="patinha de gato" />
            </Figure>
            <Figure>
              <Img
                src={genteLegal}
                alt='Gato com caneca escrito "gente legal tem gato" '
              />
            </Figure>
            <Figure>
              <Pata src={patinhas} alt="patinha de gato" />
            </Figure>
          </Container>
          <Infos>
            <FigureInfo>
              <Figcaption>
                <p>Melhor companheiro daqueles que vivem fazendo códigos</p>
              </Figcaption>
              <img src={programaGato} />
            </FigureInfo>
            <FigureInfo>
              <Figcaption>
                <p>Ajudam muito no anti estresse, são muito carinhosos!</p>
              </Figcaption>
              <img src={carinho} />
            </FigureInfo>
            <FigureInfo>
              <Figcaption>
                <p>São estilosos</p>
              </Figcaption>
              <img src={estilo} />
            </FigureInfo>
          </Infos>
        </Body>
      </>
    );
  }
}
