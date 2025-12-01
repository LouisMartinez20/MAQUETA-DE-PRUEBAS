import { Banner } from "../../Components/ui/Banner";
import { Box, Text } from "@inubekit/inubekit";

export const PlaceholderPage = ({ title = "Módulo" }) => {
  return (
    <>
      <Banner />
      <Box padding="32px" borderRadius="8px" margin="16px 0px">
        <Text type="title" size="large" appearance="dark" weight="bold">
          {title}
        </Text>
        <Text type="body" size="medium" appearance="gray">
          Este módulo está en desarrollo
        </Text>
      </Box>
    </>
  );
};
