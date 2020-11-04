import styled from "styled-components";

export const Background = styled.div`
  /* height: 90vh; */
  background: radial-gradient(
    27.62% 37.27% at 50% 37.27%,
    #06a248 0%,
    #00893a 100%
  );
  width: 100%;
  padding: 11.4%;
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
  font-size: 1rem;
`;

export const Subtitle = styled.h4`
  font-size: 1.33rem;
  color: #fff;

  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  flex-flow: row wrap;

  @media (max-width: 404px) {
    a:first-child {
      margin-bottom: 1rem;
    }
  }
`;

export const ButtonsWrapperHorizontal = styled(ButtonsWrapper)`
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
`;

export const MockupImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 360px;
  @media (max-width: 1440px) and (min-width: 1280px), (max-width: 860px) {
    display: none;
  }
`;

export const ContentWrapperHorizonal = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 4rem; */

  display: flex;
  flex-flow: column wrap;
`;

export const MockupImgMobile = styled(MockupImg)`
  display: none;

  margin: 4rem auto 2rem auto;
  @media (max-width: 1440px) and (min-width: 1280px), (max-width: 860px) {
    display: block;
    max-width: 45%;
  }
`;

export const Header = styled.div`
  grid-area: header;
  margin-bottom: 2rem;
`;

export const RolesWrapper = styled.div``;

export const TechsWrapper = styled.div`
  /* margin-top: 4rem; */
`;

export const VerticalWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 340px) calc(65% - 4rem);
  grid-column-gap: 4rem;

  @media (max-width: 1440px) and (min-width: 1280px), (max-width: 860px) {
    grid-template-columns: 100%;
  }
`;

export const HorizontalWrapper = styled(VerticalWrapper)`
  grid-template-columns: 100% !important;
  grid-column-gap: 0;

  ${MockupImg} {
    max-width: 80%;
    margin: 4rem auto 2rem auto;
    display: block;
  }
`;
