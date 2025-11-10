import { Breadcrumbs, Text, Icon } from "@inubekit/inubekit";
import { MdArrowBack, MdMoreVert } from "react-icons/md";
import { HGroupContainer, TitleRow, BackIcon, MobileMoreIcon } from "./Styles";
export const HGroup = ({
  breadcrumbs,
  title = "Ausencias",
  description = "Descripción ausencias (pendiente).",
  onBack,
  showMoreOptions = true, //en mobile muestra icono de más opciones
}) => {
  const defaultCrumbs = [
    { id: "inicio", label: "Inicio", path: "/" },
    { id: "ausencias", label: "Ausencias", path: "/ausencias", isActive: true },
  ];
  const crumbs = breadcrumbs ?? defaultCrumbs;
  const handleBack = () => { //maneja las alertas de los botones regresar y más opciones (deberia ser un modal)
    if (onBack) {
      onBack();
    } else {
      alert("Regresar a la vista anterior");
    }
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
              appearance="dark"
              size="20px"
              spacing="narrow"/>
          </BackIcon>
          <Text
            appearance="dark"
            size="large"
            weight="normal"
            type="title">
            {title} 
          </Text>
        {showMoreOptions && (
          <MobileMoreIcon
            onClick={handleMoreOptions}>
            <Icon icon={<MdMoreVert />} 
            appearance="dark" 
            size="24px" 
            spacing="narrow" />
          </MobileMoreIcon>
        )}
      </TitleRow>
        <Text type="body" size="medium" appearance="gray" weight="regular">
          {description}
        </Text>
    </HGroupContainer>
  );
};
