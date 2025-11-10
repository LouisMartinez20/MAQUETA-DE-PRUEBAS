import { Sidebar } from "./Components/Sidebar";
import { HeaderApp } from "./Components/HeaderApp";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
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
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}/>
                ))}
              </Routes>
            </InnerContent>
          </BodyArea>
        </ContentArea>
      </AppContainer>
    </Content>
  );
};

export default App;
