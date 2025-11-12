import { Box, Text, Icon } from "@inubekit/inubekit";
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

const WidgetItem = ({
  icon,
  iconAppearance = "primary",
  value,
  valueUnit,
  label,
}) => {
  return (
    <Widget>
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
  const widgetsData = [
    {
      icon: <MdNotificationsNone />,
      iconAppearance: "primary",
      label: "Alertas(0)",
    },
    {
      icon: <MdOutlinePersonOff />,
      iconAppearance: "danger",
      label: "Ausente",
    },
    {
      value: "2",
      valueUnit: "años",
      label: "Antigüedad",
    },
    {
      icon: <MdOutlineBeachAccess />,
      iconAppearance: "gray",
      value: "22",
      label: "Días pendientes",
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
    </Box>
  );
};
