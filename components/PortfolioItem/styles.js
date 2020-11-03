import styled from "styled-components";

export const Background = styled.div`
  /* height: 90vh; */
  background: radial-gradient(
    27.62% 37.27% at 50% 37.27%,
    #06a248 0%,
    #00893a 100%
  );
  width: 100%;
  padding: 7.11rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.66rem;
`;

export const Client = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.88rem;
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 100;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h4`
  font-size: 1.33rem;
  color: #fff;

  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`;

export const MockupImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 360px;
`;

export const Header = styled.div`
  grid-area: header;
  margin-bottom: 2rem;
`;

export const RolesWrapper = styled.div``;

export const TechsWrapper = styled.div`
  margin-top: 4rem;
`;

export const VerticalWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% calc(65% - 4rem);
  grid-column-gap: 4rem;
`;
