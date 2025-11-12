import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;
`;

export const Step2Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  /* 📱 Móvil: cambia a una sola columna */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionBox = styled.div`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: 8px;
  padding: 16px;
  background-color: ${inube.palette.neutral.N10};
`;

export const BackActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;


