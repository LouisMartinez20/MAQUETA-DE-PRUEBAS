import { Text, Grid, Textfield } from "@inubekit/inubekit";
import { StepContainer } from "./Steps.styles";

export const Step3Duration = ({ formData, onChange }) => {
  const calculateDuration = () => {
    if (formData?.fechaInicio && formData?.fechaFin) {
      const start = new Date(formData.fechaInicio);
      const end = new Date(formData.fechaFin);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays;
    }
    return 0;
  };

  const duration = calculateDuration();

  return (
    <StepContainer>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Duración de ausencia
      </Text>
      <Text
        type="body"
        size="medium"
        appearance="gray"
        margin="8px 0px 24px 0px"
      >
        Indique las fechas en las que estará ausente.
      </Text>

      <Grid templateColumns="1fr 1fr" gap="24px" autoRows="auto">
        <Textfield
          label="Fecha de inicio"
          placeholder="DD/MM/AAAA"
          name="fechaInicio"
          id="fechaInicio"
          type="date"
          size="compact"
          value={formData?.fechaInicio || ""}
          onChange={onChange}
          required
          fullwidth
        />

        <Textfield
          label="Fecha de fin"
          placeholder="DD/MM/AAAA"
          name="fechaFin"
          id="fechaFin"
          type="date"
          size="compact"
          value={formData?.fechaFin || ""}
          onChange={onChange}
          required
          fullwidth
        />

        <Textfield
          label="Hora de inicio (opcional)"
          placeholder="HH:MM"
          name="horaInicio"
          id="horaInicio"
          type="time"
          size="compact"
          value={formData?.horaInicio || ""}
          onChange={onChange}
          fullwidth
        />

        <Textfield
          label="Hora de fin (opcional)"
          placeholder="HH:MM"
          name="horaFin"
          id="horaFin"
          type="time"
          size="compact"
          value={formData?.horaFin || ""}
          onChange={onChange}
          fullwidth
        />

        {duration > 0 && (
          <div style={{ gridColumn: "1 / -1", marginTop: "8px" }}>
            <Text type="body" size="medium" appearance="primary" weight="bold">
              Duración total: {duration} {duration === 1 ? "día" : "días"}
            </Text>
          </div>
        )}
      </Grid>
    </StepContainer>
  );
};
