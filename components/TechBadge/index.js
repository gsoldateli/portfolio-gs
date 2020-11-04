import React from "react";

import { Container, Icon } from "./styles";

const types = {
  react: {
    label: "React",
    icon: "react.png",
  },
  "react-native": {
    label: "React Native",
    icon: "react.png",
  },
  laravel: {
    label: "Laravel",
    icon: "laravel.png",
  },
  expo: {
    label: "Expo.io",
    icon: "expo.png",
  },
  "styled-components": {
    label: "Styled Components",
    icon: "styled-components.png",
  },
  javascript: {
    label: "Javascript",
    icon: "javascript.png",
  },
};

function TechBadge({ type }) {
  if (!type) return null;
  const { label, icon } = types[type];
  return (
    <Container>
      {label} <Icon src={`icons/tech/${icon}`} />
    </Container>
  );
}

export default TechBadge;
