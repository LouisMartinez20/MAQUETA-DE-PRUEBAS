import { Text, Stack } from "@inubekit/inubekit";
import { StepContainer, SummarySection, SummaryItem } from "./Steps.styles";

export const Step5Verification = ({ formData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "No especificada";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const getAbsenceTypeLabel = (value) => {
    const types = {
      vacaciones: "Vacaciones",
      incapacidad: "Incapacidad médica",
      permiso_personal: "Permiso personal",
      permiso_estudio: "Permiso por estudio",
      licencia_maternidad: "Licencia de maternidad/paternidad",
      calamidad: "Calamidad doméstica",
      otro: "Otro",
    };
    return types[value] || value;
  };

  return (
    <StepContainer>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Verificación de información
      </Text>
      <Text
        type="body"
        size="medium"
        appearance="gray"
        margin="8px 0px 24px 0px"
      >
        Revise cuidadosamente la información antes de enviar su solicitud.
      </Text>

      <Stack direction="column" gap="24px">
        {/* Motivo de ausencia */}
        <SummarySection>
          <Text type="label" size="medium" appearance="gray" weight="bold">
            Motivo de ausencia
          </Text>
          <SummaryItem>
            <Text type="body" size="small" appearance="gray">
              Tipo:
            </Text>
            <Text type="body" size="medium" appearance="dark" weight="bold">
              {getAbsenceTypeLabel(formData?.tipoAusencia)}
            </Text>
          </SummaryItem>
          <SummaryItem>
            <Text type="body" size="small" appearance="gray">
              Motivo detallado:
            </Text>
            <Text type="body" size="medium" appearance="dark">
              {formData?.motivoDetallado || "No especificado"}
            </Text>
          </SummaryItem>
          {formData?.observaciones && (
            <SummaryItem>
              <Text type="body" size="small" appearance="gray">
                Observaciones:
              </Text>
              <Text type="body" size="medium" appearance="dark">
                {formData.observaciones}
              </Text>
            </SummaryItem>
          )}
        </SummarySection>

        {/* Duración */}
        <SummarySection>
          <Text type="label" size="medium" appearance="gray" weight="bold">
            Duración de la ausencia
          </Text>
          <SummaryItem>
            <Text type="body" size="small" appearance="gray">
              Fecha de inicio:
            </Text>
            <Text type="body" size="medium" appearance="dark" weight="bold">
              {formatDate(formData?.fechaInicio)}
            </Text>
          </SummaryItem>
          <SummaryItem>
            <Text type="body" size="small" appearance="gray">
              Fecha de fin:
            </Text>
            <Text type="body" size="medium" appearance="dark" weight="bold">
              {formatDate(formData?.fechaFin)}
            </Text>
          </SummaryItem>
          {(formData?.horaInicio || formData?.horaFin) && (
            <SummaryItem>
              <Text type="body" size="small" appearance="gray">
                Horario:
              </Text>
              <Text type="body" size="medium" appearance="dark">
                {formData?.horaInicio || "--:--"} -{" "}
                {formData?.horaFin || "--:--"}
              </Text>
            </SummaryItem>
          )}
        </SummarySection>

        {/* Documentos */}
        <SummarySection>
          <Text type="label" size="medium" appearance="gray" weight="bold">
            Documentos adjuntos
          </Text>
          <SummaryItem>
            <Text type="body" size="medium" appearance="dark">
              Los documentos han sido cargados correctamente
            </Text>
          </SummaryItem>
        </SummarySection>

        {/* Advertencia */}
        <SummarySection
          style={{
            backgroundColor: "#FFF8E1",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Text type="body" size="small" appearance="warning" weight="bold">
            ⚠️ Importante
          </Text>
          <Text
            type="body"
            size="small"
            appearance="dark"
            margin="8px 0px 0px 0px"
          >
            Al enviar esta solicitud, confirma que toda la información
            proporcionada es correcta y verídica. La solicitud será revisada por
            el área de Recursos Humanos.
          </Text>
        </SummarySection>
      </Stack>
    </StepContainer>
  );
};
