import styled from "styled-components";

// HeaderApp styles
export const HeaderWrapper = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    img {
      height: 36px;
      cursor: pointer;
      margin-left: 30%;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #091e42;
  }
`;
