import { Nav } from "@inubekit/inubekit";
import { MdLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarContainer } from "./Styles";
import inubeLogo from "/Logo_crediboard.svg";
import { SIDEBAR_LINKS } from "../../navigation/navigationConfig";
export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Construimos un objeto de links a partir de la configuración centralizada
  const links = Object.fromEntries(
    SIDEBAR_LINKS.map((link) => [
      link.id,
      {
        ...link,
        // Activo si estamos exactamente en la ruta o en una subruta
        isActive:
          location.pathname === link.path ||
          location.pathname.startsWith(link.path + "/"),
        onClick: () => navigate(link.path),
      },
    ])
  );
  const navigation = {
    title: "MENÚ",
    sections: {
      gestion: {
        name: "GESTIÓN DE AUSENCIAS",
        links,
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
