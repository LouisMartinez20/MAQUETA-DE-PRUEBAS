import { createPortal } from "react-dom";
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
  StyledModalContainerMedium,
  StyledModalHeader,
} from "./modal.styles.js";
export const AffiliationModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const {
    fechaAfiliacion = "",
    tiempoAfiliacion = "",
    estadoAfiliacion = "",
  } = data || {};
  const modalRoot = document.getElementById("modal-root");
  return createPortal(
    <Blanket>
      <StyledModalContainerMedium>
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
        <Stack padding="24px 0" direction="column" gap="16px">
          <Textfield
            label="Fecha de afiliación"
            id="fechaAfiliacion"
            value={fechaAfiliacion}
            disabled
            fullwidth
          />
          <Textfield
            label="Tiempo de afiliación"
            id="tiempoAfiliacion"
            value={tiempoAfiliacion}
            disabled
            fullwidth
          />
          <Textfield
            label="Estado de afiliación"
            id="estadoAfiliacion"
            value={estadoAfiliacion}
            disabled
            fullwidth
          />
          <Stack direction="row" justifyContent="flex-end" margin="8px 0 0 0">
            <Button appearance="primary" onClick={onClose}>
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </StyledModalContainerMedium>
    </Blanket>,
    modalRoot
  );
};
