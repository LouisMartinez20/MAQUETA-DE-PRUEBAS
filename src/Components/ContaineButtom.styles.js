import styled from "styled-components";

// ContainerButton styles
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
