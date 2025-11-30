import { useState } from "react";
import { HGroup } from "../Components/Hgroup";
import { Banner } from "../Components/Banner";
import { AssistedComponent } from "../Components/Assisted";
import { Step1Requirements } from "../Components/FormSteps/Step1Requirements";
import { Step2Reason } from "../Components/FormSteps/Step2Reason";
import { Step3Duration } from "../Components/FormSteps/Step3Duration";
import { Step4Documents } from "../Components/FormSteps/Step4Documents";
import { Step5Verification } from "../Components/FormSteps/Step5Verification";
import { Box, Button, Stack, Icon, Text } from "@inubekit/inubekit";
import { MdOutlineRule } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { Step5SuccessModal } from "../Components/Modales/Step5SuccessModal";
export const ReportAbsencePage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // controla el paso actual del formulario desde los botones
  const [formData, setFormData] = useState({ //controla los datos del formulario
    motivo: "",
    submotivo: "",
    detallesMotivo: "",
    fechaInicio: "",
    duracionDias: "",
    duracionHoras: "",
    horaInicio: "",
  });
  const [documents, setDocuments] = useState({}); // controla los documentos adjuntos
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // controla la visibilidad del modal de éxito
  const breadcrumbs = [
    { id: "inicio", label: "Inicio", path: ROUTES.HOME },
    { id: "elipse", label: "...", path: ROUTES.AUSENCIAS.LIST },
    {
      id: "reportar",
      label: "Reportar ausencia",
      path: ROUTES.AUSENCIAS.CREATE,
      isActive: true,
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return true;
      case 2:
        return formData.motivo && formData.submotivo && formData.detallesMotivo;
      case 3:
        return (
          formData.fechaInicio && formData.duracionDias && formData.horaInicio
        );
      case 4:
        const requiredDoc = documents?.incapacidad_medica_eps;
        const requiredCount = requiredDoc?.files?.length || 0;
        return requiredCount > 0;
      case 5:
        return true;
      default:
        return false;
    }
  };
  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    console.log("Documentos adjuntos:", documents);
    setIsSuccessOpen(true);
  };
  const handleFinishSuccess = () => {
    setIsSuccessOpen(false);
    navigate(ROUTES.AUSENCIAS.LIST);
  };
  const handleCancel = () => {
    if (
      window.confirm(
        "¿Está seguro de que desea cancelar? Se perderán los datos ingresados."
      )
    ) {
      navigate(ROUTES.AUSENCIAS.LIST);
    }
  };
  const handleNext = () => {
    if (isStepValid(currentStep) && currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const renderCurrentStep = (step) => {
    const commonProps = {
      formData,
      onChange: handleInputChange,
    };
    switch (step) {
      case 1:
        return <Step1Requirements />;
      case 2:
        return <Step2Reason {...commonProps} />;
      case 3:
        return <Step3Duration {...commonProps} />;
      case 4:
        return (
          <Step4Documents documents={documents} setDocuments={setDocuments} />
        );
      case 5:
        return <Step5Verification formData={formData} documents={documents} />;
      default:
        return null;
    }
  };
  return (
    <>
      <Banner />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin="0 0 16px 0"
      >
        <HGroup
          breadcrumbs={breadcrumbs}
          title="Reportar ausencia"
          description="Complete el formulario para reportar una nueva ausencia."
          showBackButton={true}
          onBack={handleCancel}
        />
        <Button variant="outlined" appearance="gray" spacing="compact" iconAfter={<MdOutlineRule />}>
          Requisitos
        </Button>
      </Stack>
          <AssistedComponent
            onSubmitClick={handleSubmit}
            validateStep={isStepValid}
            onStepChange={setCurrentStep}
          />
          <Stack direction="column" justifyContent="space-between">
            <Box
              borderRadius="8px"
              padding="24px"
              style={{
                maxHeight: currentStep === 5 ? "calc(100vh - 420px)" : "unset",
                overflowY: currentStep === 5 ? "auto" : "visible",
              }}
            >
              {renderCurrentStep(currentStep)}
            </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          gap="16px"
          padding="16px 0px "
        >
          {currentStep > 1 && (
            <Button
              variant="outlined"
              appearance="gray"
              spacing="wide"
              onClick={handleBack}
            >
              Regresar
            </Button>
          )}
          {currentStep < 5 ? (
            <Button
              variant="filled"
              appearance="primary"
              spacing="wide"
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
            >
              Siguiente
            </Button>
          ) : (
            <Button
              variant="filled"
              appearance="primary"
              spacing="wide"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          )}
        </Stack>
      </Stack>
      {isSuccessOpen && (
        <Step5SuccessModal
          isOpen={isSuccessOpen}
          onFinish={handleFinishSuccess}
        />
      )}
    </>
  );
};
