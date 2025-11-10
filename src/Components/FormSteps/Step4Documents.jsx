import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    Icon,
} from "@inubekit/inubekit";
import { MdAttachFile } from "react-icons/md";

export const Step4Documents = () => {
    // Datos de los documentos
    const data = [
        { documento: "Cita medica programada - (Opcional)" },
        {
            documento:
                "Incapacidad medica emitida por una EPS o prepagada - *Requerido*",
        },
        {
            documento:
                "Orden medica de tratamiento, examen especializado o recuperación post-operatoria  - (Opcional)",
        },
    ];

    return (
        <>
            <Table
                tableLayout="fixed"
                borderCollapse="collapse"
                borderWidth="1px"
                borderStyle="solid"
            >
                <Thead>
                    <Tr>
                        <Th align="center">
                            <Text
                                as="span"
                                type="title"
                                size="medium"
                                appearance="dark"
                                weight="bold"
                            >
                                Documento solicitado
                            </Text>
                        </Th>
                        <Th align="center" action="true" width="80px">
                            <Text
                                as="span"
                                type="title"
                                size="medium"
                                appearance="dark"
                                weight="bold"
                            >
                                Adjuntar
                            </Text>
                        </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            <Td align="left" appearance="light" type="text">
                                {item.documento}
                            </Td>
                            <Td align="center" appearance="light" type="text">
                                <Icon
                                    icon={<MdAttachFile />}
                                    appearance="primary"
                                    size="20px"
                                    spacing="narrow"
                                    cursorHover={true}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};
