import styled from "styled-components";

/* ========================================
   SIDEBAR STYLES
   ======================================== */

export const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;

  

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* ========================================
   HGROUP STYLES
   ======================================== */

export const HGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const BackIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #374151;
  padding: 0.25rem;

  &:hover {
    opacity: 0.7;
  }
`;

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

/* ========================================
   BANNER STYLES
   ======================================== */

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const WidgetContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100px;
  border-left: 2px solid #e0e0e0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const WidgetContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

/* ========================================
  TABLE STYLES
======================================== */

export const StyledTableWrapper = styled.div`
  width: 100%;

  tbody {
    overflow: visible;
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
      width: 70px ;
      text-align: center;
    }

    tbody td:nth-child(4) {
      width: 140px;
      text-align: center;
    }
  }
`;

/* ========================================
   CONTAINER BUTTON STYLES
   ======================================== */

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

/* ========================================
   HEADER APP STYLES
   ======================================== */

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

  &:hover {
    opacity: 0.7;
  }
`;
