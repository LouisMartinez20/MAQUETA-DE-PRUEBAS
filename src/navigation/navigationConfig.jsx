import { ROUTES } from "../routes";
import {
  MdOutlineBeachAccess,
  MdOutlinePersonalInjury,
  MdOutlinePersonOff,
  MdOutlineFilePresent,
  MdOutlineHistoryEdu,
  MdOutlineBadge,
  MdPendingActions,
  MdOutlineHome,
} from "react-icons/md";

// Lista única de enlaces de navegación de la aplicación
export const NAV_LINKS = [
  {
    id: "inicio",
    label: "Inicio",
    path: ROUTES.AUSENCIAS.LIST,
    icon: <MdOutlineHome />,
  },

  {
    id: "vacaciones",
    label: "Vacaciones",
    path: ROUTES.VACACIONES,
    icon: <MdOutlineBeachAccess />,
  },
  {
    id: "incapacidades",
    label: "Incapacidades",
    path: ROUTES.INCAPACIDADES,
    icon: <MdOutlinePersonalInjury />,
  },
    {
    id: "ausencias",
    label: "Ausencias",
    path: ROUTES.AUSENCIAS.LIST,
    icon: <MdOutlinePersonOff />,
  },
  {
    id: "certificaciones",
    label: "Certificaciones",
    path: ROUTES.CERTIFICACIONES,
    icon: <MdOutlineFilePresent />,
  },
  {
    id: "contratos",
    label: "Contratos",
    path: ROUTES.CONTRATOS,
    icon: <MdOutlineHistoryEdu />,
  },
  {
    id: "cargos",
    label: "Cargos",
    path: ROUTES.CARGOS,
    icon: <MdOutlineBadge />,
  },
  {
    id: "solicitudes",
    label: "Solicitudes de trámite",
    path: ROUTES.SOLICITUDES,
    icon: <MdPendingActions />,
  },
];

// Secciones para el FullscreenNav del Header reutilizando NAV_LINKS
export const HEADER_SECTIONS = [
  {
    subtitle: "General",
    links: NAV_LINKS.map(({ id, label, path, icon }) => ({
      id,
      label,
      path,
      icon,
    })),
  },
];

// Enlaces específicos del Sidebar (ahora simplemente alias de NAV_LINKS)
export const SIDEBAR_LINKS = NAV_LINKS.filter(({ id }) => id !== "inicio");
