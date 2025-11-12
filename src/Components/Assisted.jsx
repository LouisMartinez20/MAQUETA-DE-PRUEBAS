import { useState, useEffect } from "react";
import { Assisted } from "@inubekit/inubekit";


export const AssistedComponent = ({
  onSubmitClick,
  validateStep,
  onStepChange,
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 768px)");
    const handler = (e) => {
      setIsMobile(e.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

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
        goBackText: "Anterior",
        goNextText: "Siguiente",
        submitText: "Enviar",
      }}
      size={isMobile ? "small" : "large"}
    >
      {children}
    </Assisted>
  );
};
