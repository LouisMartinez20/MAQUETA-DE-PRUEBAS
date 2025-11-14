import {
  Blanket,
  Stack,
  Text,
  Icon,
  Button,
  Textfield,
} from "@inubekit/inubekit";
import { MdClose } from "react-icons/md";
import {
  StyledModalContainer,
  StyledModalHeader,
} from "./AffiliationModal.styles";

export const AffiliationModal = ({
  isOpen,
  onClose,
  values = { fechaAfiliacion: "", tiempoAfiliacion: "", estadoAfiliacion: "" },
}) => {
  if (!isOpen) return null;

  return (
    <Blanket>
      <StyledModalContainer>
        <StyledModalHeader>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type="title" size="large" weight="bold">
              Antigüedad y afiliación
            </Text>
            <Icon
              icon={<MdClose />}
              appearance="dark"
              size="24px"
              cursorHover={true}
              onClick={onClose}
            />
          </Stack>
          <Text type="body" size="medium" appearance="gray">
            Consulta la información de afiliación del colaborador.
          </Text>
        </StyledModalHeader>

        <Stack padding="24px" direction="column" gap="16px">
          <Textfield
            label="Fecha de afiliación"
            id="fechaAfiliacion"
            placeholder="YYYY-MM-DD"
            value={values?.fechaAfiliacion || ""}
            disabled
            fullwidth
          />
          <Textfield
            label="Tiempo de afiliación"
            id="tiempoAfiliacion"
            placeholder="Ej: 2 años, 3 meses"
            value={values?.tiempoAfiliacion || ""}
            disabled
            fullwidth
          />
          <Textfield
            label="Estado de afiliación"
            id="estadoAfiliacion"
            placeholder="Ej: Activa"
            value={values?.estadoAfiliacion || ""}
            disabled
            fullwidth
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            gap="8px"
            margin="8px 0 0 0"
          >
            <Button appearance="primary" onClick={onClose}>
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </StyledModalContainer>
    </Blanket>
  );
};
