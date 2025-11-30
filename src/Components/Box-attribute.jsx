// Box-attribute.jsx
import { Text, Box } from "@inubekit/inubekit";
import { BoxContent } from "./Styles";

export const BoxAttribute = ({ title, description }) => {
  return (
    <BoxContent>
      <Box padding="4px 16px" borderRadius="8px" width="auto" >
        <Text weight="bold" type="label" padding="4px 0">
          {title}
        </Text>
        <Text appearance="gray" padding="4px 0">
          {description}
        </Text>
      </Box>
    </BoxContent>
  );
};
