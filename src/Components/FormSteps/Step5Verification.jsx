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

/* --- Subcomponentes reutilizables --- */
const BackAction = () => (
  <BackActionContainer>
    <Button appearance="dark" spacing="compact" variant="none">
      <Stack direction="row" gap="8px" alignItems="center">
        <Icon icon={<MdArrowBack />} appearance="dark" size="18px" spacing="narrow" />
        <Text type="label" size="medium" weight="bold">
          Regresar a este paso
        </Text>
      </Stack>
    </Button>
  </BackActionContainer>
);

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

/* --- Datos declarativos --- */
const sectionsConfig = (formData, counts, formatCount) => [
  {
    title: "Requisitos",
    content: (
      <Text type="title" size="medium" appearance="success">
        cumple con los requisitos.
      </Text>
    ),
  },
  {
    title: "Motivo de la ausencia",
    content: (
      <>
        <Step2Grid>
          {["motivo", "submotivo"].map((field) => (
            <Textfield
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              id={`${field}-readonly`}
              size="compact"
              value={formData?.[field] || ""}
              disabled
              fullwidth
            />
          ))}
        </Step2Grid>
        <Textarea
          label="Detalles del motivo"
          id="detallesMotivo-readonly"
          value={formData?.detallesMotivo || ""}
          disabled
          fullwidth
        />
      </>
    ),
  },
  {
    title: "Duración de la ausencia",
    content: (
      <>
        <Textfield
          label="Fecha de inicio"
          id="fechaInicio-readonly"
          size="compact"
          value={formData?.fechaInicio || ""}
          disabled
          fullwidth
        />
        <Step2Grid>
          {["duracionDias", "duracionHoras"].map((f) => (
            <Textfield
              key={f}
              label={
                f === "duracionDias"
                  ? "Duración (días)"
                  : "Duración (horas)"
              }
              id={`${f}-readonly`}
              size="compact"
              value={formData?.[f] || ""}
              disabled
              fullwidth
            />
          ))}
        </Step2Grid>
        <Textfield
          label="Hora de inicio"
          id="horaInicio-readonly"
          size="compact"
          value={formData?.horaInicio || ""}
          disabled
          fullwidth
        />
      </>
    ),
  },
  {
    title: "Documentos adjuntos",
    content: (
      <>
        <Step2Grid>
          {counts.slice(0, 2).map((c, i) => (
            <Textfield
              key={i}
              label={c.label}
              id={`doc-count-${i}`}
              size="compact"
              value={formatCount(c.count)}
              disabled
              fullwidth
            />
          ))}
        </Step2Grid>
        <Textfield
          label={counts[2].label}
          id="doc-count-2"
          size="compact"
          value={formatCount(counts[2].count)}
          disabled
          fullwidth
        />
      </>
    ),
  },
];

/* --- Componente principal --- */
export const Step5Verification = ({ formData, documents }) => {
  const docFields = [
    { id: "cita_medica_programada", label: "Cita médica programada - (Opcional)" },
    { id: "incapacidad_medica_eps", label: "Incapacidad médica emitida por EPS - *Requerido*" },
    { id: "orden_medica_tratamiento", label: "Orden médica de tratamiento - (Opcional)" },
  ];

  const counts = docFields.map((f) => ({
    label: f.label,
    count: documents?.[f.id]?.files?.length ?? 0,
  }));

  const formatCount = (count) => {
    if (!count) return "No adjunto";
    if (count === 1) return "1 archivo adjunto";
    return `${count} archivos adjuntos`;
  };

  const sections = sectionsConfig(formData, counts, formatCount);

  return (
    <StepContainer>
      <Stack direction="column" gap="24px">
        {sections.map((section, index) => (
          <SectionCard key={index} title={section.title}>
            {section.content}
          </SectionCard>
        ))}
      </Stack>
    </StepContainer>
  );
};
