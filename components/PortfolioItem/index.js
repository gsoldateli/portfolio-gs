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
            {type === "vertical" && <MockupImg src={mockupImgUrl} />}
            <div>
              <Header>
                <Title>{title}</Title>
                <Client>{subtitle}</Client>
              </Header>
              {type === "horizontal" && <MockupImg src={mockupImgUrl} />}
              {type === "vertical" && <MockupImgMobile src={mockupImgUrl} />}

              <Description>{description}</Description>
              <ButtonsWrapper>
                <Button style={{ color: "blue", marginRight: "1rem" }} />
                <SecondaryButton />
              </ButtonsWrapper>
              <TechsWrapper>
                <Subtitle>Technologies used</Subtitle>
                <TechBadge type="react-native" />
                <TechBadge type="laravel" />
                <TechBadge type="expo" />

                <TechBadge type="javascript" />
                <TechBadge type="styled-components" />

                {/* <img
                    src="http://i.imgur.com/3mXLuSq.png"
                    className="techs"
                    style={{ width: "100%" }}
                  /> */}
              </TechsWrapper>
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

export default PortfolioItem;
