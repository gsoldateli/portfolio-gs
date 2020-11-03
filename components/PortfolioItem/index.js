import React from "react";
// import { Description } from "../Intro/styles";

import {
  Background,
  Title,
  Client,
  Subtitle,
  Description,
  MockupImg,
  Header,
  RolesWrapper,
  ButtonsWrapper,
  TechsWrapper,
  VerticalWrapper,
} from "./styles";

function PortfolioItem({
  type = "vertical",
  description,
  title,
  subtitle,
  mockupImgUrl,
  technologies = [],
  backgroundGradientColors,
}) {
  return (
    <>
      <Background
        style={{
          background: `radial-gradient( 27.62% 37.27% at 50% 37.27%,${backgroundGradientColors[0]} 0%,${backgroundGradientColors[1]} 100% )`,
        }}
      >
        <div>
          {type === "vertical" && (
            <VerticalWrapper>
              <MockupImg src={mockupImgUrl} />
              <div>
                <Header>
                  <Title>{title}</Title>
                  <Client>{subtitle}</Client>
                </Header>

                <Description>{description}</Description>
                <ButtonsWrapper>
                  <img
                    src="http://i.imgur.com/T1hmz8S.png"
                    className="buttons"
                    style={{ width: "100%" }}
                  />
                </ButtonsWrapper>
                <TechsWrapper>
                  <Subtitle>Technologies used</Subtitle>
                  <img
                    src="http://i.imgur.com/3mXLuSq.png"
                    className="techs"
                    style={{ width: "100%" }}
                  />
                </TechsWrapper>
              </div>
            </VerticalWrapper>
          )}
          <RolesWrapper>
            <Subtitle>My services</Subtitle>
          </RolesWrapper>
        </div>
      </Background>
    </>
  );
}

export default PortfolioItem;
