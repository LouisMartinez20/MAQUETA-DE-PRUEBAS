import { Blanket, Stack, Text, Icon, Button } from "@inubekit/inubekit";
import { MdClose } from "react-icons/md";
import { StyledModalContainer, StyledModalHeader } from "./modal.styles";
export const DiscardTramiteModal = ({
    isOpen,
    onClose,
    onDiscard,
    tramite,
}) => {
    if (!isOpen) return null;
    const handleDiscard = () => {
        if (onDiscard) {
            onDiscard(tramite);
        }
        onClose();
    };
    return (
        <Blanket portalId="modal-root">
            <StyledModalContainer>
                <StyledModalHeader>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Text type="title" size="large" weight="bold">
                            Descartar
                        </Text>
                        <Icon
                            icon={<MdClose />}
                            appearance="dark"
                            size="24px"
                            cursorHover={true}
                            onClick={onClose}
                        />
                    </Stack>
                </StyledModalHeader>
                <Stack padding="24px" direction="column" gap="20px">
                    <Text type="body" size="medium" appearance="dark">
                        Al descartar una solicitud esta no podrá continuar su trámite y
                        desaparecerá. ¿Realmente quieres descartar esta solicitud?
                    </Text>
                    <Stack direction="row" justifyContent="flex-end" gap="16px">
                        <Button
                            variant="outlined"
                            appearance="gray"
                            spacing="wide"
                            onClick={onClose}
                        >
                            Cerrar
                        </Button>
                        <Button
                            variant="filled"
                            appearance="danger"
                            spacing="wide"
                            onClick={handleDiscard}
                        >
                            Descartar
                        </Button>
                    </Stack>
                </Stack>
            </StyledModalContainer>
        </Blanket>
    );
};
