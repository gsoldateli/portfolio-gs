import React from "react";
// import { Description } from "../Intro/styles";

import Button, { SecondaryButton } from "../Button";
import TechBadge from "../TechBadge";

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
  MockupImgMobile,
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

                <MockupImgMobile src={mockupImgUrl} />

                <Description>{description}</Description>
                <ButtonsWrapper>
                  <Button style={{ color: "blue", marginRight: "1rem" }} />
                  <SecondaryButton />
                </ButtonsWrapper>
                <TechsWrapper>
                  <Subtitle>Technologies used</Subtitle>
                  <TechBadge type="react-native" />
                  <TechBadge type="laravel" />
                  <TechBadge type="styled-components" />
                  <TechBadge type="javascript" />
                  <TechBadge type="expo" />
                  {/* <img
                    src="http://i.imgur.com/3mXLuSq.png"
                    className="techs"
                    style={{ width: "100%" }}
                  /> */}
                </TechsWrapper>
              </div>
            </VerticalWrapper>
          )}
          {/* <RolesWrapper>
            <Subtitle>My services</Subtitle>
          </RolesWrapper> */}
        </div>
      </Background>
    </>
  );
}

export default PortfolioItem;
