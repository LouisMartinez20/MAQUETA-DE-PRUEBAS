import {
  Stack,
  Text,
  Button,
  Textfield,
  Textarea,
  Divider,
  Icon,
} from "@inubekit/inubekit";
import { MdArrowBack } from "react-icons/md";
import {
  StepContainer,
  SectionBox,
  BackActionContainer,
  Step2Grid,
} from "./Steps.styles";

const BackAction = () => (
  <BackActionContainer>
    <Button appearance="dark" spacing="compact" variant="none">
      <Stack direction="row" gap="8px" alignItems="center">
        <Icon
          icon={<MdArrowBack />}
          appearance="dark"
          size="18px"
          spacing="narrow"
        />
        <Text type="label" size="medium" weight="bold">
          Regresar a este paso
        </Text>
      </Stack>
    </Button>
  </BackActionContainer>
);

/* Sección genérica visual */
const SectionCard = ({ title, children }) => (
  <SectionBox>
    <Stack direction="column" gap="16px">
      <Text type="title" size="large" appearance="dark" weight="bold">
        {title}
      </Text>
      <Divider dashed />
      {children}
      <BackAction />
    </Stack>
  </SectionBox>
);

/* Paso 5 visual */
export const Step5Verification = ({ formData, documents }) => {
  const docFields = [
    {
      id: "cita_medica_programada",
      label: "Cita médica programada - (Opcional)",
    },
    {
      id: "incapacidad_medica_eps",
      label: "Incapacidad médica emitida por una EPS o prepagada - *Requerido*",
    },
    {
      id: "orden_medica_tratamiento",
      label:
        "Orden médica de tratamiento, examen especializado o recuperación post-operatoria - (Opcional)",
    },
  ];

  const counts = docFields.map((f) => ({
    label: f.label,
    count: documents?.[f.id]?.files?.length ?? 0,
  }));

  const formatCount = (count) => {
    if (!count || count === 0) return "No adjunto";
    if (count === 1) return "1 archivo adjunto";
    return `${count} archivos adjuntos`;
  };

  return (
    <StepContainer>
      <Stack direction="column" gap="24px">
        <SectionCard title="Requisitos">
          <Text type="title" size="medium" appearance="success">
            cumple con los requisitos.
          </Text>
        </SectionCard>

        <SectionCard title="Motivo de la ausencia">
          <Step2Grid>
            <Textfield
              label="Motivo"
              name="motivo"
              id="motivo-readonly"
              size="compact"
              value={formData?.motivo || ""}
              disabled
              fullwidth
            />
            <Textfield
              label="Submotivo"
              name="submotivo"
              id="submotivo-readonly"
              size="compact"
              value={formData?.submotivo || ""}
              disabled
              fullwidth
            />
          </Step2Grid>

          <Textarea
            label="Detalles del motivo"
            name="detallesMotivo"
            id="detallesMotivo-readonly"
            value={formData?.detallesMotivo || ""}
            disabled
            fullwidth
          />
        </SectionCard>

        <SectionCard title="Duración de la ausencia">
          <Textfield
            label="Fecha de inicio"
            name="fechaInicio"
            id="fechaInicio-readonly"
            size="compact"
            value={formData?.fechaInicio || ""}
            disabled
            fullwidth
          />

          <Step2Grid>
            <Textfield
              label="Duración (días)"
              name="duracionDias"
              id="duracionDias-readonly"
              size="compact"
              value={formData?.duracionDias || ""}
              disabled
              fullwidth
            />
            <Textfield
              label="Duración (horas)"
              name="duracionHoras"
              id="duracionHoras-readonly"
              size="compact"
              value={formData?.duracionHoras || ""}
              disabled
              fullwidth
            />
          </Step2Grid>

          <Textfield
            label="Hora de inicio"
            name="horaInicio"
            id="horaInicio-readonly"
            size="compact"
            value={formData?.horaInicio || ""}
            disabled
            fullwidth
          />
        </SectionCard>

        <SectionCard title="Documentos adjuntos">
          <Step2Grid>
            <Textfield
              label={counts[0].label}
              id={`doc-count-0`}
              size="compact"
              value={formatCount(counts[0].count)}
              disabled
              fullwidth
            />
            <Textfield
              label={counts[1].label}
              id={`doc-count-1`}
              size="compact"
              value={formatCount(counts[1].count)}
              disabled
              fullwidth
            />
          </Step2Grid>

          <Textfield
            label={counts[2].label}
            id={`doc-count-2`}
            size="compact"
            value={formatCount(counts[2].count)}
            disabled
            fullwidth
          />
        </SectionCard>
      </Stack>
    </StepContainer>
  );
};
