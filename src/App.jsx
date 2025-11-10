import { Sidebar } from "./Components/Sidebar";
import { HeaderApp } from "./Components/HeaderApp";
import { HGroup } from "./Components/Hgroup";
import { TabsGroup } from "./Components/Tabs";
import { ContainerButton } from "./Components/ContaineButtom";
import { TableComponent } from "./Components/Table";
import { Banner } from "./Components/Banner";
import { Box, } from "@inubekit/inubekit";
import {
  AppContainer,
  HeaderArea,
  ContentArea,
  BodyArea,
  InnerContent,
  TableContainer,
  Content,
} from "./App.styles";
export const App = () => {
  return (
    <Content>
      <AppContainer>
        <HeaderArea>
          <HeaderApp />
        </HeaderArea>
        <ContentArea>
          <Sidebar />
          <BodyArea>
            <InnerContent>
              <Banner />
              <HGroup />
              <TabsGroup />
              <Box borderRadius="8px" margin="0px" padding="16px">
                <TableContainer>
                  <ContainerButton />
                  <TableComponent />
                </TableContainer>
              </Box>
            </InnerContent>
          </BodyArea>
        </ContentArea>
      </AppContainer>
      </Content>
  );
};
export default App;
