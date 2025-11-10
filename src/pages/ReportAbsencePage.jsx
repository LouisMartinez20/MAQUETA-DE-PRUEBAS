import { useState } from "react";
import { HGroup } from "../Components/Hgroup";
import { Banner } from "../Components/Banner";
import { AssistedComponent } from "../Components/Assisted";
import { Step1Requirements } from "../Components/FormSteps/Step1Requirements";
import { Step2Reason } from "../Components/FormSteps/Step2Reason";
import { Step3Duration } from "../Components/FormSteps/Step3Duration";
import { Step4Documents } from "../Components/FormSteps/Step4Documents";
import { Step5Verification } from "../Components/FormSteps/Step5Verification";
import { Box } from "@inubekit/inubekit";
import { useNavigate } from "react-router-dom";

export const ReportAbsencePage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    tipoAusencia: "",
    motivoDetallado: "",
    observaciones: "",
    fechaInicio: "",
    fechaFin: "",
    horaInicio: "",
    horaFin: "",
  });

  const breadcrumbs = [
    { id: "inicio", label: "Inicio", path: "/" },
    { id: "ausencias", label: "Ausencias", path: "/ausencias" },
    {
      id: "reportar",
      label: "Reportar ausencia",
      path: "/ausencias/reportar",
      isActive: true,
    },
  ];

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar archivos cargados
  const handleFileChange = (e) => {
    const { name } = e.target;
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles((prev) => [...prev, name]);
    }
  };

  // Validación por paso
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return true; // Los requisitos siempre se cumplen en este ejemplo
      case 2:
        return formData.tipoAusencia && formData.motivoDetallado;
      case 3:
        return formData.fechaInicio && formData.fechaFin;
      case 4:
        return uploadedFiles.includes("documento1"); // Documento principal requerido
      case 5:
        return true;
      default:
        return false;
    }
  };

  // Navegación entre pasos
  const handleNext = () => {
    if (isStepValid() && currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    console.log("Archivos cargados:", uploadedFiles);
    alert("¡Solicitud de ausencia enviada correctamente!");
    navigate("/ausencias");
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "¿Está seguro de que desea cancelar? Se perderán los datos ingresados."
      )
    ) {
      navigate("/ausencias");
    }
  };

  // Renderizar el paso actual
  const renderCurrentStep = () => {
    const commonProps = {
      formData,
      onChange: handleInputChange,
    };

    switch (currentStep) {
      case 1:
        return <Step1Requirements />;
      case 2:
        return <Step2Reason {...commonProps} />;
      case 3:
        return <Step3Duration {...commonProps} />;
      case 4:
        return (
          <Step4Documents
            {...commonProps}
            onChange={handleFileChange}
            uploadedFiles={uploadedFiles}
          />
        );
      case 5:
        return <Step5Verification formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Banner />

      <HGroup
        breadcrumbs={breadcrumbs}
        title="Reportar ausencia"
        description="Complete el formulario para reportar una nueva ausencia."
        showBackButton={true}
        onBack={handleCancel}
      />

      <AssistedComponent
        currentStep={currentStep}
        onBackClick={handleBack}
        onNextClick={handleNext}
        onSubmitClick={handleSubmit}
      />

      <Box borderRadius="8px" margin="16px 0px" padding="24px">
        {renderCurrentStep()}
      </Box>
    </>
  );
};
