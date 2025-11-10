import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  width: 100%;

  tbody {
    overflow: visible;
  }

  thead th:nth-child(4) {
  }

  tfoot {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    thead th:nth-child(3),
    tbody td:nth-child(3) {
      display: none;
    }

    tbody td:nth-child(5) {
      display: none;
    }

    thead th:nth-child(4) {
      width: 140px !important;
      text-align: center;
    }

    tbody td:nth-child(4) {
      width: 140px;
      text-align: center;
    }
  }
`;
