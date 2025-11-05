import { Nav } from "@inubekit/inubekit";
import {
  MdOutlineBeachAccess,
  MdOutlinePersonalInjury,
  MdOutlinePersonOff,
  MdOutlineFilePresent,
  MdOutlineHistoryEdu,
  MdOutlineBadge,
  MdPendingActions,
  MdLogout,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarContainer } from "./Styles"; 
import inubeLogo from "/inube_logo.png";
export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const links = {
    vacaciones: {
      id: "vacaciones",
      label: "Vacaciones",
      path: "/vacaciones",
      icon: <MdOutlineBeachAccess/>,
    },
    incapacidades: {
      id: "incapacidades",
      label: "Incapacidades",
      path: "/incapacidades",
      icon: <MdOutlinePersonalInjury />,
    },
    ausencias: {
      id: "ausencias",
      label: "Ausencias",
      path: "/ausencias",
      icon: <MdOutlinePersonOff  />,
    },
    certificaciones: {
      id: "certificaciones",
      label: "Certificaciones",
      path: "/certificaciones",
      icon: <MdOutlineFilePresent  />,
    },
    contratos: {
      id: "contratos",
      label: "Contratos",
      path: "/contratos",
      icon: <MdOutlineHistoryEdu  />,
    },
    cargos: {
      id: "cargos",
      label: "Cargos",
      path: "/cargos",
      icon: <MdOutlineBadge  />,
    },
    solicitudes: {
      id: "solicitudes",
      label: "Solicitudes de trámite",
      path: "/solicitudes",
      icon: <MdPendingActions  />,
    },
  };
  const navigation = {
    title: "MENÚ",
    sections: {
      gestion: {
        name: "GESTIÓN DE AUSENCIAS",
        links: Object.fromEntries(
          Object.entries(links).map(([key, link]) => [
            key,
            {
              ...link,
              isActive: location.pathname === link.path,
              onClick: () => navigate(link.path),
            },
          ])
        ),
      },
    },
  };
  const actions = [
    {
      id: "logout",
      label: "Cerrar sesión",
      icon: <MdLogout size={18} />,
      action: () => alert("Sesión cerrada correctamente"),
    },
  ];
  return (
    <SidebarContainer>
      <Nav
        navigation={navigation}
        actions={actions}
        footerLabel="Maqueta de Ausencias"
        footerLogo={inubeLogo}
        collapse={false}
      />
    </SidebarContainer>
  );
};
