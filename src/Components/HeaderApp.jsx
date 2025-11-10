import { Header } from "@inubekit/inubekit";
import { MdOutlinePerson, MdOutlineLogout, MdMenu } from "react-icons/md";
import presenteLogo from "/presente_logo.png";
import { HeaderWrapper, MenuButton } from "./HeaderApp.styles";

export const HeaderApp = () => {
  const handleMenuClick = () => {
    alert("Abrir menú lateral");
  };

  return (
    <HeaderWrapper>
      <MenuButton type="button" aria-label="Menú" onClick={handleMenuClick}>
        <MdMenu />
      </MenuButton>
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
    </HeaderWrapper>
  );
};
