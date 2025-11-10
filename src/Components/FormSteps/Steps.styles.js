import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;
`;

export const RequirementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;
`;

export const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${(props) => (props.met ? "#F0F9FF" : "#FEF2F2")};
  border-left: 3px solid ${(props) => (props.met ? "#2E7D32" : "#DC2626")};
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.met ? "#E0F2FE" : "#FEE2E2")};
  }
`;

export const FileUploadInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bfdbfe;
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
