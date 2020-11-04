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
        <title>Portfolio - Guilherme Soldateli</title>
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
            mainButtonProps={{
              href: "https://encomendas.maodoce.com.br",
              text: "Make an order",
            }}
            secondaryButtonProps={{
              href: "https://google.com",
              text: "Walk through",
            }}
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#d32f2f", "#d32f2f"]}
            accentColor="#f74f42
            "
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
            backgroundGradientColors={["#1868a7", "#01579b"]}
            accentColor="#01579b"
            mainButtonProps={{
              href: "https://www.carvalhaes.net/",
              text: "See Live",
            }}
          />

          <PortfolioItem
            title="DIFUSÃO"
            subtitle="Customer relationship mobile Application"
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
            mainButtonProps={{
              href: "https://google.com",
              text: "See it working",
            }}
            // secondaryButtonProps={{
            //   href: "https://google.com",
            //   text: "Walk through",
            // }}
          />
          <PortfolioItem
            title="SUPERLIVERY"
            subtitle="Supermarket delivery mobile Application"
            mockupImgUrl="/superlivery-mockup.png"
            description="Mobile application to scale farmer’s training on how to make the
            best use of their farming supplies bought from Maná."
            techs={[
              "react-native",
              "laravel",
              "expo",
              "styled-components",
              "javascript",
            ]}
            backgroundGradientColors={["#d81b60", "#d81b60"]}
            accentColor="#F20E5C"
            mainButtonProps={{
              href:
                "https://play.google.com/store/apps/details?id=com.superlivery.superlivery",
              text: "Play Store",
            }}
            secondaryButtonProps={{
              href: "https://google.com",
              text: "Walkt through",
            }}
          />
          <HorizontalPorfolioItem
            title="DIFUSÃO"
            subtitle="Single Page Application Admin Dashboard"
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
            backgroundGradientColors={["#3b9240", "#2e7d32"]}
            accentColor="#2e7d32"
            mainButtonProps={{
              href: "https://google.com",
              text: "See in action",
            }}
            // secondaryButtonProps={{
            //   href: "https://google.com",
            //   text: "Walk through",
            // }}
          />

          <Footer />
        </ContentWrapper>
      </SectionsWrapper>
    </>
  );
}
