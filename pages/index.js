import Head from "next/head";
import styled from "styled-components";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import PortfolioItem, {
  HorizontalPorfolioItem,
} from "../components/PortfolioItem";

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
            title="Sweet Labs Store"
            subtitle="Candy ordering web application"
            mockupImgUrl="/maodoce-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#f32b29", "#f52220"]}
            accentColor="#f32b29"
          />
          <PortfolioItem
            title="DIFUSÃO"
            subtitle="Mobile Application"
            mockupImgUrl="/smartphone-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#06a248", "#00893a"]}
            accentColor="#06A148"
          />

          <HorizontalPorfolioItem
            title="CARVALHAES"
            subtitle="Chemical supplies E-commerce"
            mockupImgUrl="/carvalhaes-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#2a6de8", "#104bb7"]}
            accentColor="#104bb7"
          />

          <HorizontalPorfolioItem
            title="DIFUSÃO"
            subtitle="SPA Admin Panel"
            mockupImgUrl="/laptop-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#5EBB55", "#55B44C"]}
            accentColor="#5bb554"
          />
          <PortfolioItem
            title="SUPERLIVERY"
            subtitle="Mobile Application"
            mockupImgUrl="/smartphone-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#E91855", "#E2164E"]}
            accentColor="#F20E5C"
          />

          <Footer />
        </ContentWrapper>
      </SectionsWrapper>
    </>
  );
}
