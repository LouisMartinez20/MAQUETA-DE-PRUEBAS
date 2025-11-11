import { Grid, Select, Textarea } from "@inubekit/inubekit";
import { StepContainer } from "./Steps.styles";
export const Step2Reason = ({ formData, onChange }) => {
    const motivoOptions = [
        { id: "1", label: "Vacaciones", value: "vacaciones" },
        { id: "2", label: "Incapacidad médica", value: "incapacidad" },
        { id: "3", label: "Permiso personal", value: "permiso_personal" },
        { id: "4", label: "Permiso por estudio", value: "permiso_estudio" },
        {id: "5",label: "Licencia de maternidad/paternidad",value: "licencia_maternidad",},
        { id: "6", label: "Calamidad doméstica", value: "calamidad" },
        { id: "7", label: "Otro", value: "otro" },
    ];
    const submotivoOptions = [
        { id: "1", label: "Enfermedad general", value: "enfermedad_general" },
        { id: "2", label: "Accidente laboral", value: "accidente_laboral" },
        { id: "3", label: "Cita médica", value: "cita_medica" },
        { id: "4", label: "Asunto familiar", value: "asunto_familiar" },
        { id: "5", label: "Trámite personal", value: "tramite_personal" },
        { id: "6", label: "Otro", value: "otro" },
    ];
    const handleSelectChange = (name, value) => {
        onChange({ target: { name, value } });
    };
    return (
        <StepContainer>
            <Grid templateColumns="1fr 1fr" gap="16px" autoRows="auto">
                <Select
                    label="Motivo"
                    placeholder="Seleccione de la lista"
                    name="motivo"
                    id="motivo"
                    size="compact"
                    options={motivoOptions}
                    value={formData?.motivo || ""}
                    onChange={(name, value) => handleSelectChange(name, value)}
                    clearable={false}
                    fullwidth
                />
                <Select
                    label="Submotivo"
                    placeholder="Seleccione de la lista"
                    name="submotivo"
                    id="submotivo"
                    size="compact"
                    options={submotivoOptions}
                    value={formData?.submotivo || ""}
                    onChange={(name, value) => handleSelectChange(name, value)}
                    clearable={false}
                    fullwidth
                />
            </Grid>
            <Grid templateColumns="1fr" gap="16px" margin="16px 0px 0px 0px">
                <Textarea
                    label="Detalles del motivo"
                    placeholder="Más detalles acerca de la ausencia"
                    name="detallesMotivo"
                    id="detallesMotivo"
                    value={formData?.detallesMotivo || ""}
                    onChange={onChange}
                    maxLength={200}
                    required
                    fullwidth
                />
            </Grid>
        </StepContainer>
    );
};
