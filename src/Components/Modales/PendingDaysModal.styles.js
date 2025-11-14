import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 8px;
  width: 90%;
  max-width: 820px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

export const StyledModalHeader = styled.div`
  padding: 16px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
`;
