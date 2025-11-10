import { HGroup } from "../Components/Hgroup";
import { TabsGroup } from "../Components/Tabs";
import { ContainerButton } from "../Components/ContaineButtom";
import { TableComponent } from "../Components/Table";
import { Banner } from "../Components/Banner";
import { Box } from "@inubekit/inubekit";
import { TableContainer } from "../App.styles";

export const AbsencesListPage = () => {
  const breadcrumbs = [
    { id: "inicio", label: "Inicio", path: "/" },
    { id: "ausencias", label: "Ausencias", path: "/ausencias", isActive: true },
  ];

  return (
    <>
      <Banner />
      <HGroup
        breadcrumbs={breadcrumbs}
        title="Ausencias"
        description="Descripción ausencias (pendiente)."
        showBackButton={false}
      />
      <TabsGroup />
      <Box borderRadius="8px" margin="0px" padding="16px">
        <TableContainer>
          <ContainerButton />
          <TableComponent />
        </TableContainer>
      </Box>
    </>
  );
};
