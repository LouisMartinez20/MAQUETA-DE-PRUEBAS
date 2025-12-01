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
} from "../modal.styles.js";
import { BoxAttribute } from "../../ui/Box-attribute.jsx";
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
          <BoxAttribute
            title="Fecha de afiliación"
            description={fechaAfiliacion}
          />

          <BoxAttribute
            title="Tiempo de afiliación"
            description={tiempoAfiliacion}
          />

          <BoxAttribute
            title="Estado de afiliación"
            description={estadoAfiliacion}
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
