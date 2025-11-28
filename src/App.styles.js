import styled from "styled-components";
export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/pattern.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
    left: 15px;
  }
`;
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  @media (max-width: 1440px) {
    width: 100%;
  }
`;
export const ContentArea = styled.div`
  display: flex;
  flex: 1;
`;
export const BodyArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding: 1rem;
`;
export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff;
`;
