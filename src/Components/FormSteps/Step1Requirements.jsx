import { Text, Icon } from "@inubekit/inubekit";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export const Step1Requirements = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "24px",
            }}>
            <Icon
                icon={<MdOutlineCheckCircleOutline />}
                appearance="success"
                spacing="narrow"
                size="54px" />
            <Text type="title" appearance="dark" size="medium">
                El empleado no presenta restricción por requisitos en este momento.
            </Text>
        </div>
    );
};
