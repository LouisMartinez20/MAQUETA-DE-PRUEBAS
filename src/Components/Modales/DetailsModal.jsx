import {
  Blanket,
  Stack,
  Text,
  Button,
  Icon,
  Textfield,
  Textarea,
  Tag,
} from "@inubekit/inubekit";
import { MdClose, MdOutlineVisibility  } from "react-icons/md";
import {
  ModalContainer,
  ModalHeader,
  RequirementRow,
  
} from "./DetailsModal.styles";
const mockRequirements = [
  { id: 1, name: "Cita médica programada", status: "Sin evaluar", tagAppearance: "warning" },
  { id: 2, name: "Incapacidad médica emitida por una EPS", status: "Cumple", tagAppearance: "success" },
  { id: 3, name: "Orden médica de tratamiento", status: "Sin evaluar", tagAppearance: "warning" },
];
export const DetailsModal = ({ isOpen, onClose, absence, requirements = mockRequirements }) => {
  if (!isOpen) return null;
  return (
    <>
      <Blanket reactPortalId="modal-root" />
      <ModalContainer>
        <ModalHeader>
          <Text type="title" size="large" appearance="dark" weight="bold">
            Detalles 
          </Text>
          <Stack direction="row" gap="8px" alignItems="center">
            <Text type="label" size="medium" appearance="dark">
              Cerrar
            </Text>
            <Icon
              icon={<MdClose />}
              appearance="dark"
              size="24px"
              spacing="narrow"
              cursorHover={true}
              onClick={onClose}
            />
          </Stack>
        </ModalHeader>
        <Stack direction="column" gap="24px">
          <Textfield
            label="Motivo"
            id="motivo-detail"
            size="compact"
            value={absence?.reason || ""}
            disabled
            fullwidth
          />
          <Textarea
            label="Detalles del motivo"
            id="detalles-detail"
            value={absence?.details || "No hay detalles adicionales"}
            disabled
            fullwidth
          />
          <Stack direction="column" gap="12px">
            <Text type="title" size="medium" appearance="primary" weight="bold">
              Requisitos documentales
            </Text>
            {requirements.map((req) => (
              <RequirementRow key={req.id}>
                <Text type="body" size="medium" appearance="dark">
                  {req.name}
                </Text>
                <Stack direction="row" gap="12px" alignItems="center">
                  <Tag
                    label={req.status}
                    appearance={req.tagAppearance}
                    weight="strong"
                    displayIcon={false}
                  />
                  <Icon
                    icon={<MdOutlineVisibility  />}
                    appearance="dark"
                    size="20px"
                    spacing="narrow"
                    cursorHover={true}
                    onClick={""}
                  />
                </Stack>
              </RequirementRow>
            ))}
          </Stack>
          <Stack direction="row" justifyContent="flex-end" gap="16px">
            <Button
              variant="filled"
              appearance="primary"
              spacing="wide"
              onClick={onClose}
            >
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </ModalContainer>
    </>
  );
};
