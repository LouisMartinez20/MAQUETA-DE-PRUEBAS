import {
  Stack,
  Grid,
  Text,
  Button,
  inube,
  Textfield,
  Textarea,
  Divider,
  Icon,
} from "@inubekit/inubekit";
import { MdArrowBack } from "react-icons/md";
import { StepContainer } from "./Steps.styles";

const BoxContainer = ({ children }) => (
  <div
    style={{
      border: `1px solid ${inube.palette.neutral.N40}`,
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: inube.palette.neutral.N10,
    }}
  >
    {children}
  </div>
);

export const Step5Verification = ({ formData, onGoToStep }) => {
  const motivoOptions = {
    vacaciones: "Vacaciones",
    incapacidad: "Incapacidad médica",
    permiso_personal: "Permiso personal",
    permiso_estudio: "Permiso por estudio",
    licencia_maternidad: "Licencia de maternidad/paternidad",
    calamidad: "Calamidad doméstica",
    otro: "Otro",
  };

  const submotivoOptions = {
    enfermedad_general: "Enfermedad general",
    accidente_laboral: "Accidente laboral",
    cita_medica: "Cita médica",
    asunto_familiar: "Asunto familiar",
    tramite_personal: "Trámite personal",
    otro: "Otro",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No especificado";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <StepContainer>
      <Stack direction="column" gap="24px">
        {/* Requisitos */}
        <BoxContainer>
          <Stack direction="column" gap="16px">
            <Text type="title" size="large" appearance="dark" weight="bold">
              Requisitos
            </Text>
            <Divider dashed />
            <Text type="body" size="medium" appearance="success">
              ✓ El empleado no presenta restricción por requisitos en este
              momento.
            </Text>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                appearance="dark"
                spacing="compact"
                variant="none"
                onClick={() => onGoToStep && onGoToStep(0)}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <Icon
                    icon={<MdArrowBack />}
                    appearance="dark"
                    size="18px"
                    spacing="narrow"
                  />
                  <Text type="label" size="medium">
                    Regresar a este paso
                  </Text>
                </Stack>
              </Button>
            </div>
          </Stack>
        </BoxContainer>

        {/* Motivo de la ausencia */}
        <BoxContainer>
          <Stack direction="column" gap="16px">
            <Text type="title" size="large" appearance="dark" weight="bold">
              Motivo de la ausencia
            </Text>
            <Divider dashed />
            <Grid templateColumns="1fr 1fr" gap="16px">
              <Textfield
                label="Motivo"
                name="motivo"
                id="motivo-readonly"
                size="compact"
                value={
                  motivoOptions[formData?.motivo] || formData?.motivo || ""
                }
                disabled
                fullwidth
              />
              <Textfield
                label="Submotivo"
                name="submotivo"
                id="submotivo-readonly"
                size="compact"
                value={
                  submotivoOptions[formData?.submotivo] ||
                  formData?.submotivo ||
                  ""
                }
                disabled
                fullwidth
              />
            </Grid>
            <Textarea
              label="Detalles del motivo"
              name="detallesMotivo"
              id="detallesMotivo-readonly"
              value={formData?.detallesMotivo || ""}
              disabled
              fullwidth
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                appearance="dark"
                spacing="compact"
                variant="none"
                onClick={() => onGoToStep && onGoToStep(1)}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <Icon
                    icon={<MdArrowBack />}
                    appearance="dark"
                    size="18px"
                    spacing="narrow"
                  />
                  <Text type="label" size="medium">
                    Regresar a este paso
                  </Text>
                </Stack>
              </Button>
            </div>
          </Stack>
        </BoxContainer>

        <BoxContainer>
          <Stack direction="column" gap="16px">
            <Text type="title" size="large" appearance="dark" weight="bold">
              Duración de la ausencia
            </Text>
            <Divider dashed />
            <Textfield
              label="Fecha de inicio"
              name="fechaInicio"
              id="fechaInicio-readonly"
              type="text"
              size="compact"
              value={formData?.fechaInicio || ""}
              disabled
              fullwidth
            />
            <Grid templateColumns="1fr 1fr" gap="16px">
              <Textfield
                label="Duración en días"
                name="duracionDias"
                id="duracionDias-readonly"
                type="number"
                size="compact"
                value={formData?.duracionDias || ""}
                disabled
                fullwidth
              />
              <Textfield
                label="Duración en horas"
                name="duracionHoras"
                id="duracionHoras-readonly"
                type="number"
                size="compact"
                value={formData?.duracionHoras || ""}
                disabled
                fullwidth
              />
            </Grid>
            <Textfield
              label="Hora de inicio aproximada"
              name="horaInicio"
              id="horaInicio-readonly"
              size="compact"
              value={formData?.horaInicio || ""}
              disabled
              fullwidth
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                appearance="dark"
                spacing="compact"
                variant="none"
                onClick={() => onGoToStep && onGoToStep(2)}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <Icon
                    icon={<MdArrowBack />}
                    appearance="dark"
                    size="18px"
                    spacing="narrow"
                  />
                  <Text type="label" size="medium">
                    Regresar a este paso
                  </Text>
                </Stack>
              </Button>
            </div>
          </Stack>
        </BoxContainer>

        {/* Documentos adjuntos */}
        <BoxContainer>
          <Stack direction="column" gap="16px">
            <Text type="title" size="large" appearance="dark" weight="bold">
              Documentos adjuntos
            </Text>
            <Divider dashed />
            <Stack direction="column" gap="8px">
              <Text type="body" size="medium" appearance="gray">
                • Cita médica programada - (Opcional)
              </Text>
              <Text type="body" size="medium" appearance="gray">
                • Incapacidad médica emitida por una EPS o prepagada -
                *Requerido*
              </Text>
              <Text type="body" size="medium" appearance="gray">
                • Orden médica de tratamiento, examen especializado o
                recuperación post-operatoria - (Opcional)
              </Text>
            </Stack>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                appearance="dark"
                spacing="compact"
                variant="none"
                onClick={() => onGoToStep && onGoToStep(3)}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <Icon
                    icon={<MdArrowBack />}
                    appearance="dark"
                    size="18px"
                    spacing="narrow"
                  />
                  <Text type="label" size="medium">
                    Regresar a este paso
                  </Text>
                </Stack>
              </Button>
            </div>
          </Stack>
        </BoxContainer>
      </Stack>
    </StepContainer>
  );
};
