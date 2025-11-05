import styled from "styled-components";
// Sidebar styles
export const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
    img[src*="inube_logo"] {
    width: 160px;
  }
`;
//HGroup styles
export const HGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const BackIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #374151;
  padding: 0.25rem;
`;
//Banner styles
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
`;
export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  width: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
export const WidgetContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
