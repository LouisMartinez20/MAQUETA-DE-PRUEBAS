import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
/* Contenedor general del modal */
export const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${inube.palette.neutral.N10};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 760px; 
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  z-index: 1001;
`;
export const StyledModalHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const AlertRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;
