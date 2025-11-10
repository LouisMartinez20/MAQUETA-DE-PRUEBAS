import { Header } from "@inubekit/inubekit";
import { MdOutlinePerson, MdOutlineLogout } from "react-icons/md";
import presenteLogo from "/presente_logo.png";
import { HEADER_SECTIONS } from "../navigation/navigationConfig";
import { ROUTES } from "../routes";

export const HeaderApp = () => {
  return (
    <Header
      logoURL={
        <img src={presenteLogo} alt="Presente" style={{ height: "36px" }} />
      }
      user={{
        breakpoint: "600px",
        username: "Louis Santiago",
      }}
      menu={[
        {
          id: "perfil",
          title: "Perfil",
          divider: true,
          links: [
            {
              id: "cuenta",
              path: "/perfil",
              title: "Mi cuenta",
              iconBefore: <MdOutlinePerson size={18} />,
            },
          ],
        },
        {
          id: "acciones",
          title: "Acciones",
          divider: true,
          actions: [
            {
              id: "logout",
              title: "Cerrar sesión",
              iconBefore: <MdOutlineLogout size={18} />,
              action: () => alert("Sesión cerrada correctamente"),
            },
          ],
        },
      ]}
      navigation={{
        breakpoint: "700px",
        nav: {
          reactPortalId: "fullscreen-nav-root",
          title: "MENÚ PRINCIPAL",
          collapse: true,
          displaySubtitles: true,
          footerLabel: "©2025 - Presente",
          // Usamos configuración centralizada de secciones
          sections: HEADER_SECTIONS,
          actions: [
            {
              id: "logout",
              label: "Cerrar sesión",
              icon: <MdOutlineLogout />,
              action: () => alert("Sesión cerrada correctamente"),
            },
          ],
        },
      }}
    />
  );
};
