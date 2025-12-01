import { createPortal } from "react-dom";
import {
  Blanket,
  Stack,
  Text,
  Icon,
  Button,
  Textarea,
} from "@inubekit/inubekit";
import { MdClose } from "react-icons/md";
import { StyledModalContainer, StyledModalHeader } from "../modal.styles.js";
import { BoxAttribute } from "../../ui/Box-attribute.jsx";

export const AbsentModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const {
    motivo = "",
    submotivo = "",
    fecha = "",
    duracion = "",
    detallesMotivo = "",
  } = data || {};
  const modalRoot = document.getElementById("modal-root");
  return createPortal(
    <Blanket>
      <StyledModalContainer>
        <StyledModalHeader>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type="title" size="large" weight="bold">
              Detalle de ausencia
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
            Información registrada de la ausencia del colaborador.
          </Text>
        </StyledModalHeader>
        <Stack padding="24px" direction="column" gap="20px">
          <Stack direction="row" gap="16px">
            <BoxAttribute
              title="Motivo"
              description={motivo}
              style={{ width: "50%" }}
            />
            <BoxAttribute
              title="Submotivo"
              description={submotivo}
              style={{ width: "50%" }}
            />
          </Stack>
          <Stack direction="row" gap="16px">
            <BoxAttribute
              title="Fecha en que se produjo"
              description={fecha}
              style={{ width: "100%" }}
            />
            <BoxAttribute
              title="Duración"
              description={duracion}
              style={{ width: "100%" }}
            />
          </Stack>
          <BoxAttribute
            title="Detalles del motivo"
            description={detallesMotivo}
          />
          <Stack direction="row" justifyContent="flex-end">
            <Button appearance="primary" onClick={onClose}>
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </StyledModalContainer>
    </Blanket>,
    modalRoot
  );
};
