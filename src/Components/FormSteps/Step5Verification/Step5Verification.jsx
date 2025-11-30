import { Stack, Text, Button, Divider, Icon } from "@inubekit/inubekit";
import { MdArrowBack } from "react-icons/md";
import {
  StepContainer,
  SectionBox,
  BackActionContainer,
  Step2Grid,
} from "../Steps.styles.js";
import { BoxAttribute } from "../../Box-attribute.jsx";
/* --- Subcomponentes reutilizables --- */
const BackAction = () => (
  <BackActionContainer>
    <Stack direction="row" alignItems="center">
      <Icon
        icon={<MdArrowBack />}
        appearance="dark"
        size="18px"
        spacing="narrow"
      />
      <Button appearance="dark" spacing="compact" variant="none">
        Regresar a este paso
      </Button>
    </Stack>
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
            <BoxAttribute
              key={field}
              title={field.charAt(0).toUpperCase() + field.slice(1)}
              description={formData?.[field] || ""}
            />
          ))}
        </Step2Grid>
        <BoxAttribute
          title="Detalles del motivo"
          description={formData?.detallesMotivo || ""}
        />
      </>
    ),
  },
  {
    title: "Duración de la ausencia",
    content: (
      <>
        <BoxAttribute
          title="Fecha de inicio"
          description={formData?.fechaInicio || ""}
        />
        <Step2Grid>
          {["duracionDias", "duracionHoras"].map((f) => (
            <BoxAttribute
              key={f}
              title={
                f === "duracionDias" ? "Duración (días)" : "Duración (horas)"
              }
              description={formData?.[f] || ""}
            />
          ))}
        </Step2Grid>
        <BoxAttribute
          title="Hora de inicio"
          description={formData?.horaInicio || ""}
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
            <BoxAttribute
              key={i}
              title={c.label}
              description={formatCount(c.count)}
            />
          ))}
        </Step2Grid>
        <BoxAttribute
          title={counts[2].label}
          description={formatCount(counts[2].count)}
        />
      </>
    ),
  },
];
/* --- Componente principal --- */
export const Step5Verification = ({ formData, documents }) => {
  const docFields = [
    {
      id: "cita_medica_programada",
      label: "Cita médica programada - (Opcional)",
    },
    {
      id: "incapacidad_medica_eps",
      label: "Incapacidad médica emitida por EPS - *Requerido*",
    },
    {
      id: "orden_medica_tratamiento",
      label: "Orden médica de tratamiento - (Opcional)",
    },
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
