import Head from "next/head";
import styled from "styled-components";
import Intro from "../components/Intro";
import PortfolioItem from "../components/PortfolioItem";

const IntroWrapper = styled.aside`
  width: 100%;
  @media (min-width: 1280px) {
    height: 100vh;
    width: 40%;
  }
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img.attrs({
  src: "/react-background.svg",
})`
  position: absolute;
  right: 0;
  top: 50%;
  height: 50vh;
  transform: translate3d(50%, -50%, 0);
  height: 90vh;
`;

const ContentWrapper = styled.div`
  overflow-x: hidden;
  /* flex-grow: 1; */
  width: 100%;
  @media (min-width: 1280px) {
    width: 60%;
    height: 100vh;
  }
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Soldateli - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <SectionsWrapper>
        <IntroWrapper>
          <BackgroundImage />
          <Intro containerStyles={{ zIndex: 1000 }} />
        </IntroWrapper>
        <ContentWrapper>
          <PortfolioItem
            title="DIFUSÃO"
            subtitle="Mobile Application"
            mockupImgUrl="/smartphone-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            backgroundGradientColors={["#06a248", "#00893a"]}
          />
        </ContentWrapper>
      </SectionsWrapper>
    </>
  );
}
