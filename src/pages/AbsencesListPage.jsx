import { useState } from "react";
import { HGroup } from "../Components/Hgroup";
import { TabsGroup } from "../Components/Tabs";
import { ContainerButton } from "../Components/ContaineButtom";
import { TableComponent } from "../Components/Table";
import { TramitesTable } from "../Components/TramitesTable";
import { Banner } from "../Components/Banner";
import { Box } from "@inubekit/inubekit";
import { TableContainer } from "./ReportAbsencePage.styles";
import { ROUTES } from "../routes";

const breadcrumbs = [
  { id: "inicio", label: "Inicio", path: ROUTES.HOME },
  {
    id: "ausencias",
    label: "Ausencias",
    path: ROUTES.AUSENCIAS.LIST,
    isActive: true,
  },
];

export const AbsencesListPage = () => {
  const [selectedTab, setSelectedTab] = useState("reportadas");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <Banner />
      <HGroup
        breadcrumbs={breadcrumbs}
        title="Ausencias"
        description="Descripción ausencias (pendiente)."
      />
      <TabsGroup selectedTab={selectedTab} onTabChange={handleTabChange} />
      <Box>
        <TableContainer>
          <ContainerButton />
          {selectedTab === "reportadas" ? (
            <TableComponent />
          ) : (
            <TramitesTable />
          )}
        </TableContainer>
      </Box>
    </>
  );
};
