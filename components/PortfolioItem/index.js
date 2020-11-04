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
  HorizontalWrapper,
  ButtonsWrapperHorizontal,
  ContentWrapperHorizonal,
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
}) {
  const ContentWrapper =
    type === "vertical" ? VerticalWrapper : HorizontalWrapper;
  return (
    <>
      <Background
        style={{
          background: `radial-gradient( 27.62% 37.27% at 50% 37.27%,${backgroundGradientColors[0]} 0%,${backgroundGradientColors[1]} 100% )`,
        }}
      >
        <div>
          <ContentWrapper>
            <MockupImg src={mockupImgUrl} />
            <div>
              <Header>
                <Title>{title}</Title>
                <Client>{subtitle}</Client>
              </Header>

              <MockupImgMobile src={mockupImgUrl} />

              <Description>{description}</Description>

              <ButtonsWrapper>
                <Button style={{ color: accentColor, marginRight: "1rem" }} />
                <SecondaryButton />
              </ButtonsWrapper>
              {techs.length > 0 && (
                <TechsWrapper style={{ marginTop: "4rem" }}>
                  <Subtitle>Technologies used</Subtitle>
                  {techs.map((tech) => (
                    <TechBadge key={tech} type={tech} />
                  ))}

                  {/* 
                  <TechBadge type="laravel" />
                  <TechBadge type="expo" />

                  <TechBadge type="javascript" />
                  <TechBadge type="styled-components" /> */}
                </TechsWrapper>
              )}
            </div>
          </ContentWrapper>

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
                <Button style={{ color: accentColor, marginRight: "1rem" }} />
                <SecondaryButton />
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
