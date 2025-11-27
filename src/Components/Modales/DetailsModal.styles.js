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
  padding: 24px;
  width: 90%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${inube.palette.neutral.N40};
`;
export const RequirementRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: 8px;
  background-color: ${inube.palette.neutral.N10};
  gap: 16px;
`;
export const RequirementInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;
