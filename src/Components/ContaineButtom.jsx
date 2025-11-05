import styled from "styled-components";
import { Text, Button } from "@inubekit/inubekit";
import { MdOutlineAdd } from "react-icons/md";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;
export const ContainerButton = () => {
  const handleClick = () => {
    alert("Abrir formulario para reportar ausencia");
  };
  return (
    <Container>
      <Text
        type="title"
        size="medium"
        appearance="dark"
        weight="semibold"
      >
        Consulta de ausencias del empleado
      </Text>
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
    </Container>
  );
};
