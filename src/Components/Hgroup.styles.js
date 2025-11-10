import styled from "styled-components";

// HGroup styles
export const MobileMoreIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: inline-flex;
    align-items: center;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
