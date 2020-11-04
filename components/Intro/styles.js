import styled from "styled-components";

export const Container = styled.div`
  padding: 15%;

  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.6rem;
  max-width: 400px;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const Description = styled.div`
  margin-top: 4rem;
  font-weight: 100;
`;

export const SocialMediaIcon = styled.a`
  display: block;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 1rem;
  margin-bottom: 4rem;

  ${SocialMediaIcon} {
    margin-right: 1rem;

    height: 2rem;
    width: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.a`
  font-family: "Nunito";
  font-weight: 100;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  display: inline-block;
  transition: box-shadow 0.3s, background-color 0.3s;

  &:hover {
    /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25),
      0px 4px 16px rgba(0, 0, 0, 0.25); */

    background-color: ${({ theme }) => theme.colors.blueDark};
  }
`;
