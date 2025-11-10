import { Breadcrumbs, Text, Icon } from "@inubekit/inubekit";
import { MdArrowBack, MdMoreVert } from "react-icons/md";
import { HGroupContainer, TitleRow, BackIcon } from "./Styles";
import { MobileMoreIcon, TitleWrapper } from "./Hgroup.styles";

export const HGroup = () => {
  const crumbs = [
    { id: "inicio", label: "Inicio", path: "/" },
    { id: "ausencias", label: "Ausencias", path: "/ausencias", isActive: true },
  ];
  const handleBack = () => {
    alert("Regresar a la vista anterior");
  };

  const handleMoreOptions = () => {
    alert("Abrir menú de opciones");
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
          weight="normal"
          type="title"
        >
          Ausencias
        </Text>
        <MobileMoreIcon
          type="button"
          aria-label="Más opciones"
          onClick={handleMoreOptions}
        >
          <Icon icon={<MdMoreVert />} appearance="dark" size="20px" />
        </MobileMoreIcon>
      </TitleRow>
      <Text type="body" size="medium" appearance="gray" weight="regular">
        Descripción ausencias (pendiente).
      </Text>
    </HGroupContainer>
  );
};
