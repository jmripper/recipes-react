import React from "react";
import styled from "styled-components";
import Img from "../Images/spoons.jpg";
import { Link } from "react-router-dom";
//image from unspash

const ImageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    ),
    url(${Img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
  z-index: 0;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff;

  h2 {
    font-size: 4em;
    color: #ffffff;
    z-index: 10;
    margin-bottom: 2rem;
    padding: 0;
  }
`;

const ATag = styled(Link)`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  text-decoration: none;
  color: #000000;
  opacity: 0.85;
`;

const HomePage = props => {
  return (
    <>
      <ImageBackground src={Img} />
      <TextBox>
        <h2>La Recipes</h2>
        <ATag to="/recipes">View Recipes&nbsp;&rarr;</ATag>
      </TextBox>
    </>
  );
};

export default HomePage;
