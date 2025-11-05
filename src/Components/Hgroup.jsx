import { Breadcrumbs, Text, Icon } from "@inubekit/inubekit";
import { MdArrowBack } from "react-icons/md";
import { HGroupContainer, TitleRow, BackIcon } from "./Styles";
export const HGroup = () => {
  const crumbs = [
    { id: "inicio", label: "Inicio", path: "/" },
    { id: "ausencias", label: "Ausencias", path: "/ausencias", isActive: true },
  ];
  const handleBack = () => {
    alert("Regresar a la vista anterior");
  };
  return (
    <HGroupContainer>
      <Breadcrumbs crumbs={crumbs} />
      <TitleRow>
        <BackIcon onClick={handleBack}>
          <Icon
            icon={<MdArrowBack />}
            appearance="gray"   
            size="22px"
            variant="empty"        
            spacing="narrow"       
          />
        </BackIcon>
        <Text
          appearance="dark"
          as="h1"
          size="large"
          weight="semibold"
          type="title"
        >
          Ausencias
        </Text>
      </TitleRow>
      <Text type="body" size="medium" appearance="gray" weight="regular">
        Descripción ausencias (pendiente).
      </Text>
    </HGroupContainer>
  );
};
