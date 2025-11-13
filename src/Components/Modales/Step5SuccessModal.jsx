import { Blanket, Stack, Text, Icon, Button } from "@inubekit/inubekit";
import { MdCheckCircle,  } from "react-icons/md";
import { ModalContainer, ModalHeader } from "./Step5SuccessModal.styles";

export const Step5SuccessModal = ({ isOpen, onFinish }) => {
  if (!isOpen) return null;

  return (
    <>
      <Blanket reactPortalId="modal-root" />
      <ModalContainer>
        <Stack direction="column" gap="24px" alignItems="center">
          <Icon
            icon={<MdCheckCircle />}
            appearance="success"
            size="64px"
            spacing="narrow"
          />
          <ModalHeader>
            <Text type="title" size="large" appearance="success" weight="bold">
              ¡Ausencia reportada!
            </Text>
          </ModalHeader>
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
      </ModalContainer>
    </>
  );
};
