import { useState, useEffect } from "react";
import { Assisted } from "@inubekit/inubekit";

export const AssistedComponent = ({
  onSubmitClick,
  validateStep,
  onStepChange,
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

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

  const totalSteps = steps.length;
  const currentStepData = steps[currentStep - 1];
  const isStepValid = validateStep ? validateStep(currentStep) : true;

  useEffect(() => {
    onStepChange?.(currentStep);
  }, [currentStep, onStepChange]);

  return (
    <Assisted
      step={currentStepData}
      totalSteps={totalSteps}
      onBackClick={() => setCurrentStep((s) => Math.max(s - 1, 1))}
      onNextClick={() =>
        setCurrentStep((s) => Math.min(s + 1, totalSteps))
      }
      onSubmitClick={onSubmitClick}
      disableBack={currentStep === 1}
      disableNext={!isStepValid}
      disableSubmit={!isStepValid}
      showCurrentStepNumber
      controls={{
        goBackText: "Regresar",
        goNextText: "Siguiente",
        submitText: "Enviar",
      }}
      size="large"
    >
      {children}
    </Assisted>
  );
};
