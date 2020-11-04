import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

const Wrapper = styled.footer`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
`;

const Text = styled.span`
  color: #999;
  font-size: 0.75rem;
  text-align: center;
  a {
    color: inherit;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Text>© 2020 Developed by Guilherme Soldateli.</Text>
    </Wrapper>
  );
}

export default Footer;
