import { Header } from "@inubekit/inubekit";
import { MdOutlinePerson, MdOutlineLogout } from "react-icons/md";
import presenteLogo from "/presente_logo.png";
export const HeaderApp = () => {
  return (
    <Header
      logoURL={
        <img
          src={presenteLogo}
          alt="Presente Logo"
          style={{ height: "36px", cursor: "pointer" }}
        />
      }
      user={{
        breakpoint: "600px",
        username: "Louis Santiago",
        client: "Presente App",
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
    />
  );
};
