import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
    Stack,
    Pagination,
    Icon,
} from "@inubekit/inubekit";
import { MdOutlineVisibility, MdOutlineFileUpload } from "react-icons/md";
export const TableComponent = () => {
    const absences = [
        { id: 1, reason: "Incapacidad médica", date: "2025-10-21", duration: "3 días" },
        { id: 2, reason: "Permiso personal", date: "2025-10-30", duration: "1 día" },
        { id: 3, reason: "Vacaciones", date: "2025-11-02", duration: "7 días" },
        { id: 4, reason: "Incapacidad médica", date: "2025-11-15", duration: "2 días" },];
    return (
        <Table tableLayout="fixed" borderCollapse="collapse" borderWidth="1px" borderStyle="solid">
            <Thead>
                <Tr>
                    <Th align="center">
                        <Text as="span" type="title" size="medium" appearance="dark" weight="bold">
                            Motivo
                        </Text>
                    </Th>
                    <Th align="center">
                        <Text as="span" type="title" size="medium" appearance="dark" weight="bold">
                            Fecha en que se produjo
                        </Text>
                    </Th>
                    <Th align="center">
                        <Text as="span" type="title" size="medium" appearance="dark" weight="bold">
                            Duración
                        </Text>
                    </Th>
                    <Th align="center" action="true" colSpan={2} width="140px">
                        <Text as="span" type="title" size="medium" appearance="dark" weight="bold">
                            Acciones
                        </Text>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {absences.map((absence, rawIndex) => (
                    <Tr zebra={rawIndex % 2 === 1} key={absence.id} border="bottom">
                        <Td align="left" appearance="light" type="text">
                            {absence.reason}
                        </Td>
                        <Td align="center" appearance="light" type="text">
                            {absence.date}
                        </Td>
                        <Td align="center" appearance="light" type="text">
                            {absence.duration}
                        </Td>
                        <Td align="center" type="icon">
                            <Icon
                                icon={<MdOutlineVisibility />}
                                appearance="dark"
                                size="20px"
                                variant="empty"
                            />
                        </Td>
                        <Td align="center" type="icon">
                            <Icon
                                icon={<MdOutlineFileUpload />}
                                appearance="primary"
                                size="20px"
                                variant="empty"
                            />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
            <Tfoot>
                <Tr>
                    <Td colSpan={5} align="right">
                        <Stack
                            justifyContent="flex-end"
                            width="100vh"
                            padding="8px 16px"
                        >
                            <Pagination
                                firstEntryInPage={0}
                                lastEntryInPage={absences.length}
                                totalRecords={absences.length}
                                handleStartPage={() => { }}
                                handlePrevPage={() => { }}
                                handleNextPage={() => { }}
                                handleEndPage={() => { }}
                            />
                        </Stack>
                    </Td>
                </Tr>
            </Tfoot>
        </Table>
    );
};
