import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${inube.palette.neutral.N10};
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  padding: 32px;
  width: 90%;
  max-width: 520px;
  z-index: 1001;
  max-height: 80vh;
  overflow-y: auto;
  text-align: center;
`;

export const ModalHeader = styled.div`
  margin-bottom: 16px;
`;
