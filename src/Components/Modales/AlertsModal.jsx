import { createPortal } from "react-dom";
import { Blanket, Stack, Text, Icon, Button } from "@inubekit/inubekit";
import { MdClose, MdOutlineReportProblem } from "react-icons/md";
import {
  StyledModalContainer,
  StyledModalHeader,
  AlertRow,
} from "./modal.styles.js";
export const AlertsModal = ({ isOpen, onClose, alerts = [] }) => {
  if (!isOpen) return null;
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
              Alertas
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
            Listado de alertas recientes del colaborador.
          </Text>
        </StyledModalHeader>
        <Stack padding="24px" direction="column" gap="20px">
          {alerts.length === 0 && (
            <Text type="body" size="medium" appearance="gray">
              No hay alertas registradas.
            </Text>
          )}
          {alerts.map((alert) => (
            <AlertRow key={alert.id}>
              <Icon
                icon={<MdOutlineReportProblem />}
                appearance="warning"
                size="28px"
                variant="empty"
              />
              <Stack direction="column" gap="4px" flex="1">
                <Text
                  type="label"
                  size="small"
                  appearance="gray"
                  weight="regular"
                >
                  Sucede {alert.fecha} {alert.hora}
                </Text>
                <Text type="title" size="small" appearance="dark" weight="bold">
                  {alert.titulo}
                </Text>
                <Text
                  type="body"
                  size="small"
                  appearance="dark"
                  weight="regular"
                >
                  {alert.detalles}
                </Text>
              </Stack>
            </AlertRow>
          ))}
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
