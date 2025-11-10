import { Text, Grid, Select, Textarea } from "@inubekit/inubekit";
import { StepContainer } from "./Steps.styles";

export const Step2Reason = ({ formData, onChange }) => {
  const absenceTypes = [
    { id: "1", label: "Vacaciones", value: "vacaciones" },
    { id: "2", label: "Incapacidad médica", value: "incapacidad" },
    { id: "3", label: "Permiso personal", value: "permiso_personal" },
    { id: "4", label: "Permiso por estudio", value: "permiso_estudio" },
    {
      id: "5",
      label: "Licencia de maternidad/paternidad",
      value: "licencia_maternidad",
    },
    { id: "6", label: "Calamidad doméstica", value: "calamidad" },
    { id: "7", label: "Otro", value: "otro" },
  ];

  const handleSelectChange = (name, value) => {
    onChange({ target: { name, value } });
  };

  return (
    <StepContainer>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Motivo de ausencia
      </Text>
      <Text
        type="body"
        size="medium"
        appearance="gray"
        margin="8px 0px 24px 0px"
      >
        Seleccione el tipo de ausencia y proporcione los detalles.
      </Text>

      <Grid templateColumns="1fr" gap="24px" autoRows="auto">
        <Select
          label="Tipo de ausencia"
          placeholder="Seleccione un tipo"
          name="tipoAusencia"
          id="tipoAusencia"
          size="compact"
          options={absenceTypes}
          value={formData?.tipoAusencia || ""}
          onChange={(name, value) => handleSelectChange(name, value)}
          required
          fullwidth
        />

        <Textarea
          label="Motivo detallado"
          placeholder="Describa el motivo de su ausencia"
          name="motivoDetallado"
          id="motivoDetallado"
          value={formData?.motivoDetallado || ""}
          onChange={onChange}
          maxLength={500}
          required
          fullwidth
        />

        <Textarea
          label="Observaciones adicionales (opcional)"
          placeholder="Ingrese cualquier información adicional relevante"
          name="observaciones"
          id="observaciones"
          value={formData?.observaciones || ""}
          onChange={onChange}
          maxLength={300}
          fullwidth
        />
      </Grid>
    </StepContainer>
  );
};
