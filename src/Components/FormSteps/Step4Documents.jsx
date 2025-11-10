import { Text, Grid, Textfield, Stack, Icon } from "@inubekit/inubekit";
import { MdOutlineFileUpload, MdCheckCircle } from "react-icons/md";
import { StepContainer, FileUploadInfo } from "./Steps.styles";

export const Step4Documents = ({ formData, onChange, uploadedFiles = [] }) => {
  const requiredDocuments = [
    {
      id: "documento1",
      label: "Documento de soporte principal",
      required: true,
    },
    {
      id: "documento2",
      label: "Documento adicional 1 (opcional)",
      required: false,
    },
    {
      id: "documento3",
      label: "Documento adicional 2 (opcional)",
      required: false,
    },
  ];

  return (
    <StepContainer>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Documentos requeridos
      </Text>
      <Text
        type="body"
        size="medium"
        appearance="gray"
        margin="8px 0px 24px 0px"
      >
        Adjunte los documentos necesarios que soporten su solicitud de ausencia.
      </Text>

      <FileUploadInfo>
        <Icon
          icon={<MdOutlineFileUpload />}
          appearance="primary"
          size="20px"
          variant="outlined"
        />
        <div>
          <Text type="body" size="small" appearance="dark" weight="bold">
            Formatos aceptados:
          </Text>
          <Text type="body" size="small" appearance="gray">
            PDF, JPG, PNG, DOCX (máximo 5MB por archivo)
          </Text>
        </div>
      </FileUploadInfo>

      <Grid
        templateColumns="1fr"
        gap="20px"
        autoRows="auto"
        margin="24px 0px 0px 0px"
      >
        {requiredDocuments.map((doc) => (
          <Stack key={doc.id} direction="column" gap="8px">
            <Textfield
              label={doc.label}
              placeholder="Seleccione un archivo"
              name={doc.id}
              id={doc.id}
              type="file"
              size="compact"
              onChange={onChange}
              required={doc.required}
              fullwidth
              accept=".pdf,.jpg,.jpeg,.png,.docx"
            />
            {uploadedFiles.includes(doc.id) && (
              <Stack gap="8px" alignItems="center">
                <Icon
                  icon={<MdCheckCircle />}
                  appearance="success"
                  size="16px"
                  variant="filled"
                />
                <Text type="body" size="small" appearance="success">
                  Archivo cargado correctamente
                </Text>
              </Stack>
            )}
          </Stack>
        ))}
      </Grid>
    </StepContainer>
  );
};
