import { Sidebar } from "./Components/Sidebar";
import { HeaderApp } from "./Components/HeaderApp";
import { Banner } from "./Components/Banner";
import { Box } from "@inubekit/inubekit";
import { Routes, Route, Navigate } from "react-router-dom";
import { AbsencesListPage } from "./pages/AbsencesListPage";
import { ReportAbsencePage } from "./pages/ReportAbsencePage";
import {
  AppContainer,
  HeaderArea,
  ContentArea,
  BodyArea,
  InnerContent,
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
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/ausencias" replace />}
                />
                <Route path="/ausencias" element={<AbsencesListPage />} />
                <Route
                  path="/ausencias/reportar"
                  element={<ReportAbsencePage />}
                />
                {/* Rutas placeholder para otros módulos */}
                <Route
                  path="/vacaciones"
                  element={
                    <Box>
                      <Banner />
                      <h2>Vacaciones - En desarrollo</h2>
                    </Box>
                  }
                />
                <Route
                  path="/incapacidades"
                  element={
                    <Box>
                      <Banner />
                      <h2>Incapacidades - En desarrollo</h2>
                    </Box>
                  }
                />
                <Route
                  path="/certificaciones"
                  element={
                    <Box>
                      <Banner />
                      <h2>Certificaciones - En desarrollo</h2>
                    </Box>
                  }
                />
                <Route
                  path="/contratos"
                  element={
                    <Box>
                      <Banner />
                      <h2>Contratos - En desarrollo</h2>
                    </Box>
                  }
                />
                <Route
                  path="/cargos"
                  element={
                    <Box>
                      <Banner />
                      <h2>Cargos - En desarrollo</h2>
                    </Box>
                  }
                />
                <Route
                  path="/solicitudes"
                  element={
                    <Box>
                      <Banner />
                      <h2>Solicitudes - En desarrollo</h2>
                    </Box>
                  }
                />
              </Routes>
            </InnerContent>
          </BodyArea>
        </ContentArea>
      </AppContainer>
    </Content>
  );
};

export default App;
