import { createPortal } from "react-dom";
import { Blanket, Stack, Text, Icon, Button } from "@inubekit/inubekit";
import { MdCheckCircle } from "react-icons/md";
import { StyledModalContainer, StyledModalHeader } from "./modal.styles";
export const Step5SuccessModal = ({ isOpen, onFinish }) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root");
  return createPortal(
    <Blanket>
      <StyledModalContainer>
        <Stack direction="column" gap="24px" alignItems="center">
          <Icon
            icon={<MdCheckCircle />}
            appearance="success"
            size="64px"
            spacing="narrow"
          />
          <StyledModalHeader>
            <Text type="title" size="large" appearance="success" weight="bold">
              ¡Ausencia reportada!
            </Text>
          </StyledModalHeader>
          <Text type="body" size="medium" appearance="dark">
            La ausencia se reportó exitosamente y fue agregada a la consulta.
          </Text>
          <Button
            variant="filled"
            appearance="primary"
            spacing="wide"
            onClick={onFinish}
          >
            Finalizar
          </Button>
        </Stack>
      </StyledModalContainer>
    </Blanket>,
    modalRoot
  );
};
