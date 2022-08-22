import React from "react";
import styled, { css } from "styled-components";

function StyleComponents() {
  let mainColor = "#db7093",
    mainAlphaColor89 = "#db709380";

  const MyH3 = styled.h3`
    padding: 10px;
    text-align: center;
    font-weight: 700;
    height: 100px;
    width: 250px;
    background-color: black;
    color: ${({ color }) => color || mainColor};
    border: 1px solid ${mainAlphaColor89};
    transition: 0.5s;
    cursor: pointer;

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 1px solid white;
        color: white;
        text-align: center;
        background-color: green;
        border-radius: 50px;
        height: auto;
      `}

    &:hover {
      background-color: gray;
    }
  `;

  return (
    <div>
      <MyH3>React App</MyH3>
      <MyH3 color="red">Style Components</MyH3>
      <MyH3 isButton>Soy un button</MyH3>
    </div>
  );
}

export default StyleComponents;
