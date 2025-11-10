import { Text, Stack, Icon } from "@inubekit/inubekit";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { RequirementItem, RequirementsContainer } from "./Steps.styles";

export const Step1Requirements = ({ requirements }) => {
  const defaultRequirements = [
    { id: 1, text: "Tener al menos 6 meses de antigüedad", met: true },
    { id: 2, text: "No tener ausencias pendientes", met: true },
    { id: 3, text: "Haber completado el período de prueba", met: true },
    { id: 4, text: "No tener sanciones activas", met: true },
  ];

  const items = requirements || defaultRequirements;
  const allMet = items.every((req) => req.met);

  return (
    <RequirementsContainer>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Verificación de requisitos
      </Text>
      <Text
        type="body"
        size="medium"
        appearance="gray"
        margin="8px 0px 16px 0px"
      >
        Antes de continuar, verifique que cumple con los siguientes requisitos:
      </Text>

      <Stack direction="column" gap="12px">
        {items.map((requirement) => (
          <RequirementItem key={requirement.id} met={requirement.met}>
            <Icon
              icon={requirement.met ? <MdCheckCircle /> : <MdCancel />}
              appearance={requirement.met ? "success" : "danger"}
              size="20px"
              variant="filled"
            />
            <Text
              type="body"
              size="medium"
              appearance={requirement.met ? "dark" : "gray"}
            >
              {requirement.text}
            </Text>
          </RequirementItem>
        ))}
      </Stack>

      {!allMet && (
        <Text
          type="body"
          size="small"
          appearance="danger"
          margin="16px 0px 0px 0px"
        >
          * Debe cumplir con todos los requisitos para continuar
        </Text>
      )}
    </RequirementsContainer>
  );
};
