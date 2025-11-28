import { createPortal } from "react-dom";
import {
  Blanket,
  Stack,
  Text,
  Icon,
  Button,
  Textfield,
  Textarea,
  Box
} from "@inubekit/inubekit";
import { MdClose } from "react-icons/md";
import { StyledModalContainer, StyledModalHeader } from "./modal.styles.js";
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
            <Box
              padding="8px"
              margin="4px 0"
              borderRadius="8px"
              width="100%"
              type="text-area"
            >
              <Text
                size="medium"
                weight="bold"
                margin="0 0 4px 0"
              >
                Motivo
              </Text>

              <Text
                size="small"
                disabled
              >
                {motivo}
              </Text>
            </Box>
            <Textfield
              label="Submotivo"
              id="submotivo-ausencia"
              value={submotivo}
              size="compact"
              disabled
              fullwidth
            />
          </Stack>
          <Stack direction="row" gap="16px">
            <Textfield
              label="Fecha en que se produjo"
              id="fecha-ausencia"
              value={fecha}
              size="compact"
              disabled
              fullwidth
            />
            <Textfield
              label="Duración"
              id="duracion-ausencia"
              value={duracion}
              size="compact"
              disabled
              fullwidth
            />
          </Stack>
          <Textarea
            label="Detalles del motivo"
            id="detalles-motivo-ausencia"
            value={detallesMotivo}
            disabled
            fullwidth
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
