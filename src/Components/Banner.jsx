import { Box, Text, Icon } from "@inubekit/inubekit";
import { useState } from "react";
import {
  MdCheckCircle,
  MdCached,
  MdOutlineBeachAccess,
  MdOutlinePersonOff,
  MdNotificationsNone,
} from "react-icons/md";
import {
  BannerContainer,
  ProfileImage,
  DataContainer,
  RowContainer,
  StatusWrapper,
  WidgetContainer,
  Widget,
  Content,
  WidgetContent,
} from "./Styles";
import { AffiliationModal } from "./Modales/AffiliationModal";
import { AlertsModal } from "./Modales/AlertsModal";
import { AbsentModal } from "./Modales/AbsentModal";
import { PendingDaysModal } from "./Modales/PendingDaysModal";

const WidgetItem = ({
  icon,
  iconAppearance = "primary",
  value,
  valueUnit,
  label,
  onClick,
}) => {
  return (
    <Widget
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      <WidgetContent>
        {icon && (
          <Icon
            icon={icon}
            appearance={iconAppearance}
            size="24px"
            variant="empty"
            cursorHover={true}
          />
        )}
        {value && (
          <Text type="title" size="large" appearance="primary" weight="bold">
            {value}
          </Text>
        )}
        {valueUnit && (
          <Text type="label" size="small" appearance="dark" weight="regular">
            {valueUnit}
          </Text>
        )}
      </WidgetContent>
      <Text type="label" size="small" appearance="gray" weight="regular">
        {label}
      </Text>
    </Widget>
  );
};

export const Banner = () => {
  const [isAffiliationOpen, setIsAffiliationOpen] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [affiliationData] = useState({
    fechaAfiliacion: "2023-01-15",
    tiempoAfiliacion: "2 años",
    estadoAfiliacion: "Activa",
  });
  const [isAbsentOpen, setIsAbsentOpen] = useState(false);
  const [absentData] = useState({
    motivo: "Incapacidad médica",
    submotivo: "Gripe estacional",
    fecha: "2025-11-10",
    duracion: "3 días",
    detallesMotivo:
      "El colaborador presenta síntomas respiratorios y reposo indicado por el médico.",
  });
  const [isPendingOpen, setIsPendingOpen] = useState(false);
  const [pendingData] = useState({
    pendingTotal: 22,
    pendingRows: [
      { contrato: "Empresa XYZ S.A.", dias: 22 },
    ],
    usedTotal: 6,
    usedRows: [
      { fecha: "2025-05-02", modalidad: "Vacaciones", dias: 2 },
      { fecha: "2025-07-18", modalidad: "Vacaciones", dias: 3 },
      { fecha: "2025-09-03", modalidad: "Permiso remunerado", dias: 1 },
    ],
  });

  const openAffiliation = () => setIsAffiliationOpen(true);
  const closeAffiliation = () => setIsAffiliationOpen(false);
  const openAlerts = () => setIsAlertsOpen(true);
  const closeAlerts = () => setIsAlertsOpen(false);
  const openAbsent = () => setIsAbsentOpen(true);
  const closeAbsent = () => setIsAbsentOpen(false);
  const openPending = () => setIsPendingOpen(true);
  const closePending = () => setIsPendingOpen(false);

  const alertsData = [
    {
      id: 1,
      fecha: "2025-11-10",
      hora: "08:30",
      titulo: "Cumple 5 años en la compañía.",
      detalles:
        "Se recomienda preparar reconocimiento por aniversario laboral.",
    },
    {
      id: 2,
      fecha: "2025-11-14",
      hora: "09:15",
      titulo: "Vacaciones próximas.",
      detalles: "El colaborador inicia vacaciones dentro de 7 días.",
    },
  ];

  const widgetsData = [
    {
      icon: <MdNotificationsNone />,
      iconAppearance: "primary",
      label: `Alertas(${alertsData.length})`,
      onClick: openAlerts,
    },
    {
      icon: <MdOutlinePersonOff />,
      iconAppearance: "primary",
      label: "Ausente",
      onClick: openAbsent,
    },
    {
      value: "2",
      valueUnit: "años",
      label: "Antigüedad",
      onClick: openAffiliation,
    },
    {
      icon: <MdOutlineBeachAccess />,
      iconAppearance: "gray",
      value: "22",
      label: "Días pendientes",
      onClick: openPending,
    },
  ];

  return (
    <Box borderRadius="8px" margin="0px" padding="0px">
      <Content>
        <BannerContainer>
          <ProfileImage src="/profile_1.png" alt="Foto de perfil" />
          <DataContainer>
            <Text type="label" size="medium" appearance="dark" weight="bold">
              José Manuel Hernández Díaz
            </Text>
            <RowContainer>
              <Text size="small" appearance="gray" weight="regular">
                empleado
              </Text>
              <StatusWrapper>
                <Icon
                  icon={<MdCheckCircle />}
                  appearance="success"
                  size="16px"
                  variant="empty"
                />
                <Text
                  type="label"
                  size="small"
                  appearance="success"
                  weight="semibold"
                >
                  Vinculado
                </Text>
              </StatusWrapper>
            </RowContainer>
          </DataContainer>
          <Icon
            icon={<MdCached />}
            appearance="primary"
            size="24px"
            variant="outlined"
            shape="rectangle"
            spacing="narrow"
            cursorHover={true}
          />
        </BannerContainer>
        <WidgetContainer>
          {widgetsData.map((widget, index) => (
            <WidgetItem key={index} {...widget} />
          ))}
        </WidgetContainer>
      </Content>

      {isAffiliationOpen && (
        <AffiliationModal
          isOpen={isAffiliationOpen}
          onClose={closeAffiliation}
          data={affiliationData}
        />
      )}
      {isAlertsOpen && (
        <AlertsModal
          isOpen={isAlertsOpen}
          onClose={closeAlerts}
          alerts={alertsData}
        />
      )}
      {isAbsentOpen && (
        <AbsentModal
          isOpen={isAbsentOpen}
          onClose={closeAbsent}
          data={absentData}
        />
      )}
      {isPendingOpen && (
        <PendingDaysModal
          isOpen={isPendingOpen}
          onClose={closePending}
          pendingTotal={pendingData.pendingTotal}
          pendingRows={pendingData.pendingRows}
          usedTotal={pendingData.usedTotal}
          usedRows={pendingData.usedRows}
        />
      )}
    </Box>
  );
};
