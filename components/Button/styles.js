import styled from "styled-components";

const ContainerBase = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-family: "Nunito";
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
`;

export const SecondaryContainer = styled(ContainerBase)`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.75);
  transition: background-color 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.div`
  margin-right: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(ContainerBase)`
  background-color: #fff;
  color: pink;
  /* color: ${(props) => props.color}; */
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 12px rgba(0, 0, 0, 0.25);
  /* white-space: nowrap; */
`;
