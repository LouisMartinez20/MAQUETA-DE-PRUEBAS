import { HGroup } from "../Components/Hgroup";
import { TabsGroup } from "../Components/Tabs";
import { ContainerButton } from "../Components/ContaineButtom";
import { TableComponent } from "../Components/Table";
import { Banner } from "../Components/Banner";
import { Box } from "@inubekit/inubekit";
import { TableContainer } from "../App.styles";
import { ROUTES } from "../routes";

export const AbsencesListPage = () => {
    const breadcrumbs = [
        { id: "inicio", label: "Inicio", path: ROUTES.HOME },
        { id: "ausencias",label: "Ausencias",path: ROUTES.AUSENCIAS.LIST,isActive: true,},
    ];
    return (
        <>
            <Banner />
            <HGroup
                breadcrumbs={breadcrumbs}
                title="Ausencias"
                description="Descripción ausencias (pendiente)."/>
            <TabsGroup />
            <Box >
                <TableContainer>
                    <ContainerButton />
                    <TableComponent />
                </TableContainer>
            </Box>
        </>
    );
};
