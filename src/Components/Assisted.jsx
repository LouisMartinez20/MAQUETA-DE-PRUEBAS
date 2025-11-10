import { Assisted } from "@inubekit/inubekit";
export const AssistedComponent = ({
    currentStep = 1,
    onBackClick,
    onNextClick,
    onSubmitClick,
}) => {
    const steps = [
        {
            id: "requirements",
            name: "Requisitos no cumplidos",
            description: "Verificación de requisitos",
            number: 1,
        },
        {
            id: "reason",
            name: "Motivo de ausencia",
            description: "Tipo y razón de ausencia",
            number: 2,
        },
        {
            id: "duration",
            name: "Duración de ausencia",
            description: "Fechas y período",
            number: 3,
        },
        {
            id: "documents",
            name: "Documentos requeridos",
            description: "Adjuntar documentación",
            number: 4,
        },
        {
            id: "verification",
            name: "Verificación",
            description: "Confirmar información",
            number: 5,
        },
    ];
    const currentStepData = steps[currentStep - 1];
    return (
        <Assisted
            step={currentStepData}
            totalSteps={steps.length}
            onBackClick={() => onBackClick(currentStepData)}
            onNextClick={() => onNextClick(currentStepData)}
            onSubmitClick={() => onSubmitClick(currentStepData)}
            disableBack={currentStep === 1}
            disableNext={false}
            disableSubmit={false}
            showCurrentStepNumber={true}
            controls={{
                goBackText: "Anterior",
                goNextText: "Siguiente",
                submitText: "Enviar",
            }}
            size="large"
        />
    );
};
