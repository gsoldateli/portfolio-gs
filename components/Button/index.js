import React from "react";

import { Play as PlayIcon } from "../Icon";
import { Container, IconWrapper, SecondaryContainer } from "./styles";

function Button({ children, style, icon, ...rest }) {
  return (
    <Container {...rest} style={style}>
      <IconWrapper>
        <PlayIcon />
      </IconWrapper>
      {children}
    </Container>
  );
}

export const SecondaryButton = ({ children, ...rest }) => {
  return <SecondaryContainer {...rest}>{children}</SecondaryContainer>;
};

export default Button;
