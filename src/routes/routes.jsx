import { Navigate } from "react-router-dom";
import { AbsencesListPage } from "../pages/AbsencesListPage";
import { ReportAbsencePage } from "../pages/ReportAbsencePage";
import { PlaceholderPage } from "../pages/PlaceholderPage";
import { ROUTES } from "./index";

/**
  Configuración de rutas de la aplicación
  Cada ruta contiene:
  - path: URL de la ruta
  - element: Componente a renderizar
 */
export const routes = [
  {
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.AUSENCIAS.LIST} replace />,
  },
  {
    path: ROUTES.AUSENCIAS.LIST,
    element: <AbsencesListPage />,
  },
  {
    path: ROUTES.AUSENCIAS.CREATE,
    element: <ReportAbsencePage />,
  },
  {
    path: ROUTES.VACACIONES,
    element: <PlaceholderPage title="Vacaciones" />,
  },
  {
    path: ROUTES.INCAPACIDADES,
    element: <PlaceholderPage title="Incapacidades" />,
  },
  {
    path: ROUTES.CERTIFICACIONES,
    element: <PlaceholderPage title="Certificaciones" />,
  },
  {
    path: ROUTES.CONTRATOS,
    element: <PlaceholderPage title="Contratos" />,
  },
  {
    path: ROUTES.CARGOS,
    element: <PlaceholderPage title="Cargos" />,
  },
  {
    path: ROUTES.SOLICITUDES,
    element: <PlaceholderPage title="Solicitudes de trámite" />,
  },
];
