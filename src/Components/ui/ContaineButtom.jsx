import { Text, Button } from "@inubekit/inubekit";
import { MdOutlineAdd } from "react-icons/md";
import { Container, ButtonWrapper } from "./Styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

export const ContainerButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.AUSENCIAS.CREATE);
  };

  return (
    <Container>
      <Text type="title" size="medium" appearance="dark" weight="semibold">
        Consulta de ausencias del empleado
      </Text>
      <ButtonWrapper>
        <Button
          appearance="primary"
          iconBefore={<MdOutlineAdd size={18} />}
          onClick={handleClick}
          spacing="wide"
          type="button"
          variant="filled"
        >
          Reportar ausencia
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
