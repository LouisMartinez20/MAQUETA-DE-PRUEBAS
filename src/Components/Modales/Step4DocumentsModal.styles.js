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
  max-width: 600px;
  z-index: 1001;
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

export const UploadArea = styled.div`
  border: 2px dashed ${inube.palette.neutral.N90};
  border-radius: 8px;
  padding: 48px 24px;
  text-align: center;
  transition: all 0.3s ease;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${inube.palette.neutral.N0};
`;

export const FileCard = styled.div`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: 8px;
  padding: 16px;
  background-color: ${inube.palette.neutral.N10};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 250px;
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  flex: 1;
  overflow: hidden;
`;

export const FileTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  overflow: hidden;
`;

export const FileActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
