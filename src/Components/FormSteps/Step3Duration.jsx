import { Grid, Textfield, Select } from "@inubekit/inubekit";
import { StepContainer, Step2Grid } from "./Steps.styles";

const horaInicioOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return { 
        id: `${i + 1}`, 
        label: `${hour}:00`, 
        value: `${hour}:00` };
});

export const Step3Duration = ({ formData, onChange }) => {
    const handleSelectChange = (name, value) => {
        onChange({ target: { name, value } });
    };

    return (
        <StepContainer>
            <Grid templateColumns="1fr" gap="16px" margin="0px 0px 16px 0px">
                <Textfield
                    label="Fecha de inicio"
                    placeholder="DD/MM/AAAA"
                    name="fechaInicio"
                    id="fechaInicio"
                    type="date"
                    size="compact"
                    value={formData?.fechaInicio || ""}
                    onChange={onChange}
                    fullwidth
                />
            </Grid>

            <Step2Grid style={{ marginBottom: "16px" }}>
                <Textfield
                    label="Duración en días"
                    placeholder="Ej: 2"
                    name="duracionDias"
                    id="duracionDias"
                    type="number"
                    size="compact"
                    value={formData?.duracionDias || ""}
                    onChange={onChange}
                    fullwidth
                />
                <Textfield
                    label="Duración en horas"
                    placeholder="Ej: 8"
                    name="duracionHoras"
                    id="duracionHoras"
                    type="number"
                    size="compact"
                    value={formData?.duracionHoras || ""}
                    onChange={onChange}
                    fullwidth
                />
            </Step2Grid>

            <Grid templateColumns="1fr" gap="16px">
                <Select
                    label="Hora de inicio aproximada"
                    placeholder="Seleccione una hora"
                    name="horaInicio"
                    id="horaInicio"
                    size="compact"
                    options={horaInicioOptions}
                    value={formData?.horaInicio || ""}
                    onChange={(name, value) => handleSelectChange(name, value)}
                    clearable={false}
                    fullwidth
                />
            </Grid>
        </StepContainer>
    );
};
