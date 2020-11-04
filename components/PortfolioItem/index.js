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
  ButtonsWrapper,
  TechsWrapper,
  VerticalWrapper,
  MockupImgMobile,
  HorizontalWrapper,
  ButtonsWrapperHorizontal,
} from "./styles";

function PortfolioItem({
  type = "vertical",
  description,
  title,
  subtitle,
  mockupImgUrl,
  techs = [],
  accentColor = "pink",
  backgroundGradientColors,
  mainButtonProps = null,
  secondaryButtonProps = null,
}) {
  return (
    <>
      <Background
        style={{
          background: `radial-gradient( 27.62% 37.27% at 50% 37.27%,${backgroundGradientColors[0]} 0%,${backgroundGradientColors[1]} 100% )`,
        }}
      >
        <div>
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
                {mainButtonProps && (
                  <Button
                    {...mainButtonProps}
                    style={{
                      ...mainButtonProps.style,
                      color: accentColor,
                      marginRight: "1rem",
                    }}
                  >
                    {mainButtonProps.text}
                  </Button>
                )}
                {secondaryButtonProps && (
                  <SecondaryButton {...secondaryButtonProps}>
                    {secondaryButtonProps.text}
                  </SecondaryButton>
                )}
              </ButtonsWrapper>
              {techs.length > 0 && (
                <TechsWrapper style={{ marginTop: "4rem" }}>
                  <Subtitle>Technologies used</Subtitle>
                  {techs.map((tech) => (
                    <TechBadge key={tech} type={tech} />
                  ))}
                </TechsWrapper>
              )}
            </div>
          </VerticalWrapper>

          {/* <RolesWrapper>
            <Subtitle>My services</Subtitle>
          </RolesWrapper> */}
        </div>
      </Background>
    </>
  );
}

export function HorizontalPorfolioItem({
  description,
  title,
  subtitle,
  mockupImgUrl,
  accentColor = "pink",
  techs = [],
  backgroundGradientColors,
  mainButtonProps,
  secondaryButtonProps,
}) {
  return (
    <>
      <Background
        style={{
          background: `radial-gradient( 27.62% 37.27% at 50% 37.27%,${backgroundGradientColors[0]} 0%,${backgroundGradientColors[1]} 100% )`,
        }}
      >
        <div>
          <HorizontalWrapper>
            <div>
              <Header>
                <Title>{title}</Title>
                <Client>{subtitle}</Client>
              </Header>

              <MockupImg src={mockupImgUrl} />

              <Description>{description}</Description>
              <ButtonsWrapperHorizontal>
                {mainButtonProps && (
                  <Button
                    {...mainButtonProps}
                    style={{
                      ...mainButtonProps.style,
                      color: accentColor,
                      marginRight: "1rem",
                    }}
                  >
                    {mainButtonProps.text}
                  </Button>
                )}
                {secondaryButtonProps && (
                  <SecondaryButton {...secondaryButtonProps}>
                    {secondaryButtonProps.text}
                  </SecondaryButton>
                )}
              </ButtonsWrapperHorizontal>

              {techs.length > 0 && (
                <TechsWrapper>
                  <Subtitle>Technologies used</Subtitle>
                  {techs.map((tech) => (
                    <TechBadge key={tech} type={tech} />
                  ))}
                </TechsWrapper>
              )}
            </div>
          </HorizontalWrapper>

          {/* <RolesWrapper>
            <Subtitle>My services</Subtitle>
          </RolesWrapper> */}
        </div>
      </Background>
    </>
  );
}

export default PortfolioItem;
