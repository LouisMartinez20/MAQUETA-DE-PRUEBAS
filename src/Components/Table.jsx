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
import {
  MdOutlineVisibility,
  MdOutlineFileUpload,
  MdMoreVert,
} from "react-icons/md";
import { StyledTableWrapper } from "./Styles";
import { useEffect, useState } from "react";
import { DetailsModal } from "./Modales/DetailsModal";

export const TableComponent = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px)").matches;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAbsence, setSelectedAbsence] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 1024px)");
    const handler = (e) => {
      console.log("isMobile changed to:", e.matches);
      setIsMobile(e.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

  const actionsColSpan = isMobile ? 1 : 2;
  console.log("Current isMobile:", isMobile, "actionsColSpan:", actionsColSpan);
  const absences = [
    {
      id: 1,
      reason: "Incapacidad médica",
      date: "2025-10-21",
      duration: "3 días",
      details: "El empleado presenta incapacidad médica por gripe.",
    },
    {
      id: 2,
      reason: "Permiso personal",
      date: "2025-10-30",
      duration: "1 día",
      details: "Permiso personal por trámites bancarios urgentes.",
    },
    {
      id: 3,
      reason: "Vacaciones",
      date: "2025-11-02",
      duration: "7 días",
      details: "Vacaciones programadas previamente con la familia.",
    },
    {
      id: 4,
      reason: "Incapacidad médica",
      date: "2025-11-15",
      duration: "2 días",
      details: "Incapacidad por lesión en el hogar.",
    },
  ];

  const handleViewDetails = (absence) => {
    setSelectedAbsence(absence);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAbsence(null);
  };
  return (
    <StyledTableWrapper>
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
                Motivo
              </Text>
            </Th>
            <Th align="center">
              <Text
                as="span"
                type="title"
                size="medium"
                appearance="dark"
                weight="bold"
              >
                Fecha en que se produjo
              </Text>
            </Th>
            <Th align="center" weight="bold">
              <Text
                as="span"
                type="title"
                size="medium"
                appearance="dark"
                weight="bold"
              >
                Duración
              </Text>
            </Th>
            <Th
              align="center"
              action="true"
              colSpan={actionsColSpan}
              width={isMobile ? "140px" : "140px"}
            >
              <Text
                as="span"
                type="title"
                size="medium"
                appearance="dark"
                weight="bold"
              >
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
                  icon={isMobile ? <MdMoreVert /> : <MdOutlineVisibility />}
                  appearance={isMobile ? "primary" : "dark"}
                  size="20px"
                  variant={isMobile ? "filled" : "empty"}
                  shape={isMobile ? "circle" : undefined}
                  spacing={isMobile ? "none" : undefined}
                  cursorHover={true}
                  onClick={() => handleViewDetails(absence)}
                />
              </Td>
              <Td align="center" type="icon">
                <Icon
                  icon={<MdOutlineFileUpload />}
                  appearance="primary"
                  size="20px"
                  variant="empty"
                  cursorHover={true}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td colSpan={5} align="right">
              <Stack justifyContent="flex-end" padding="8px 16px">
                <Pagination
                  firstEntryInPage={0}
                  lastEntryInPage={absences.length}
                  totalRecords={absences.length}
                  handleStartPage={() => {}}
                  handlePrevPage={() => {}}
                  handleNextPage={() => {}}
                  handleEndPage={() => {}}
                />
              </Stack>
            </Td>
          </Tr>
        </Tfoot>
      </Table>

      {isModalOpen && (
        <DetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          absence={selectedAbsence}
        />
      )}
    </StyledTableWrapper>
  );
};
