import React from "react";

import { Play as PlayIcon } from "../Icon";
import { Container, IconWrapper, SecondaryContainer } from "./styles";

function Button({ style, icon }) {
  return (
    <Container style={style}>
      <IconWrapper>
        <PlayIcon />
      </IconWrapper>
      Live Demo
    </Container>
  );
}

export const SecondaryButton = () => {
  return <SecondaryContainer>Secondary</SecondaryContainer>;
};

export default Button;
