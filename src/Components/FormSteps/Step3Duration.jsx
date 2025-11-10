import {  Grid, Textfield, Select } from "@inubekit/inubekit";
import { StepContainer } from "./Steps.styles";

export const Step3Duration = ({ formData, onChange }) => {
    const horaInicioOptions = [
        { id: "1", label: "00:00", value: "00:00" },
        { id: "2", label: "01:00", value: "01:00" },
        { id: "3", label: "02:00", value: "02:00" },
        { id: "4", label: "03:00", value: "03:00" },
        { id: "5", label: "04:00", value: "04:00" },
        { id: "6", label: "05:00", value: "05:00" },
        { id: "7", label: "06:00", value: "06:00" },
        { id: "8", label: "07:00", value: "07:00" },
        { id: "9", label: "08:00", value: "08:00" },
        { id: "10", label: "09:00", value: "09:00" },
        { id: "11", label: "10:00", value: "10:00" },
        { id: "12", label: "11:00", value: "11:00" },
        { id: "13", label: "12:00", value: "12:00" },
        { id: "14", label: "13:00", value: "13:00" },
        { id: "15", label: "14:00", value: "14:00" },
        { id: "16", label: "15:00", value: "15:00" },
        { id: "17", label: "16:00", value: "16:00" },
        { id: "18", label: "17:00", value: "17:00" },
        { id: "19", label: "18:00", value: "18:00" },
        { id: "20", label: "19:00", value: "19:00" },
        { id: "21", label: "20:00", value: "20:00" },
        { id: "22", label: "21:00", value: "21:00" },
        { id: "23", label: "22:00", value: "22:00" },
        { id: "24", label: "23:00", value: "23:00" },
    ];

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

            <Grid templateColumns="1fr 1fr" gap="16px" margin="0px 0px 16px 0px">
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
            </Grid>

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
                    
                    fullwidth
                />
            </Grid>
        </StepContainer>
    );
};
