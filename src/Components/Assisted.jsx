import { Assisted } from "@inubekit/inubekit";

export const AssistedComponent = ({
  currentStep = 1,
  onBackClick,
  onNextClick,
  onSubmitClick,
}) => {
  // Definición de los 5 pasos
  const steps = [
    {
      id: "requirements",
      label: "Requisitos no cumplidos",
      description: "Verificación de requisitos",
    },
    {
      id: "reason",
      label: "Motivo de ausencia",
      description: "Tipo y razón de ausencia",
    },
    {
      id: "duration",
      label: "Duración de ausencia",
      description: "Fechas y período",
    },
    {
      id: "documents",
      label: "Documentos requeridos",
      description: "Adjuntar documentación",
    },
    {
      id: "verification",
      label: "Verificación",
      description: "Confirmar información",
    },
  ];

  // Obtener el paso actual
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
