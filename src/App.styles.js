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
    background-image: url("/pattern1.webp");
    opacity: 0.6;
    z-index: -1;
  }
`;
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;
export const HeaderArea = styled.header`
  flex-shrink: 0;
`;
export const ContentArea = styled.div`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;
export const BodyArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;
`;
export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
`;
export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
`;
