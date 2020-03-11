import React from "react";
import styled from "styled-components";
import Img from "../Images/spoons.jpg"

const ImageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomePage = props => {
  return (
      <ImageBackground src={Img} />
  );
};

export default HomePage;
