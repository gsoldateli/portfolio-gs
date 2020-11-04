import React from "react";

import {
  Container,
  Title,
  Highlight,
  Description,
  SocialMediaContainer,
  SocialMediaIcon,
  Button,
} from "./styles";

function Intro({ containerStyles = {} }) {
  return (
    <Container style={containerStyles}>
      <Title>
        <Highlight>SOFTWARE DEVELOPER</Highlight> {"&"} FREELANCER.
      </Title>
      <Description>
        <p>Hi! My name is Guilherme Soldateli.</p>
        <p>
          <strong>
            <Highlight>
              I help companies launch and maintain web applications.
            </Highlight>
          </strong>
        </p>
      </Description>
      <SocialMediaContainer>
        <SocialMediaIcon target="_github" href="https://github.com/gsoldateli">
          <img src="social/github.svg" />
        </SocialMediaIcon>
        <SocialMediaIcon
          target="_linkedin"
          href="https://www.linkedin.com/in/gsoldateli/"
        >
          <img src="social/linkedin.svg" />
        </SocialMediaIcon>
        <SocialMediaIcon href="http://www.google.com">
          <img src="social/resume.svg" fill="red" />
        </SocialMediaIcon>
      </SocialMediaContainer>
      <Button>Get In Touch!</Button>
    </Container>
  );
}

export default Intro;
