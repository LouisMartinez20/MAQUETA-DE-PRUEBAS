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
  MdMoreVert,
  MdOutlineCancel,
} from "react-icons/md";
import { StyledTableWrapper } from "./Styles";
import { useEffect, useState } from "react";
import { DetailsModal } from "./Modales/DetailsModal";
import { FilesModal } from "./Modales/FilesModal";
import { DiscardTramiteModal } from "./Modales/DiscardTramiteModal";
export const TramitesTable = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px)").matches;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilesModalOpen, setIsFilesModalOpen] = useState(false);
  const [isDiscardModalOpen, setIsDiscardModalOpen] = useState(false);
  const [selectedTramite, setSelectedTramite] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 1024px)");
    const handler = (e) => {
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
  const tramites = [
    {
      id: 1,
      fecha: "2025-11-20",
      descripcion: "Solicitud de permiso personal",
      estado: "Pendiente ⏳",
    },
    {
      id: 2,
      fecha: "2025-11-18",
      descripcion: "Solicitud de vacaciones",
      estado: "Procesada",
    },
    {
      id: 3,
      fecha: "2025-11-15",
      descripcion: "Solicitud de incapacidad médica",
      estado: "Cancelada",
    },
    {
      id: 4,
      fecha: "2025-11-12",
      descripcion: "Solicitud de permiso por calamidad",
      estado: "Rechazada",
    },
  ];
  const handleViewDetails = (tramite) => {
    setSelectedTramite(tramite);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTramite(null);
  };
  const handleCancelTramite = (tramite) => {
    setSelectedTramite(tramite);
    setIsDiscardModalOpen(true);
  };
  const handleConfirmDiscard = (tramite) => {
    console.log("Trámite descartado:", tramite);
    // TODO: Lógica para descartar el trámite
    // Aquí puedes hacer una petición al backend o actualizar el estado
  };
  const handleCloseDiscardModal = () => {
    setIsDiscardModalOpen(false);
    setSelectedTramite(null);
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
            <Th align="center" width="150px">
              <Text
                as="span"
                type="title"
                size="medium"
                appearance="dark"
                weight="bold"
              >
                Fecha
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
                Descripción
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
                Estado
              </Text>
            </Th>
            <Th
              align="center"
              action="true"
              colSpan={isMobile ? 1 : 2}
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
          {tramites.map((tramite, rawIndex) => (
            <Tr zebra={rawIndex % 2 === 1} key={tramite.id} border="bottom">
              <Td align="center" appearance="light" type="text">
                {tramite.fecha}
              </Td>
              <Td align="left" appearance="light" type="text">
                {tramite.descripcion}
              </Td>
              <Td align="center" appearance="light" type="text">
                {tramite.estado}
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
                  onClick={() => handleViewDetails(tramite)}
                />
              </Td>
              <Td align="center" type="icon">
                <Icon
                  icon={<MdOutlineCancel />}
                  appearance="danger"
                  size="20px"
                  variant="empty"
                  cursorHover={true}
                  onClick={() => handleCancelTramite(tramite)}
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
                  lastEntryInPage={tramites.length}
                  totalRecords={tramites.length}
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
          absence={selectedTramite}
        />
      )}
      {isFilesModalOpen && (
        <FilesModal
          isOpen={isFilesModalOpen}
          onClose={() => setIsFilesModalOpen(false)}
          absence={selectedTramite}
        />
      )}
      {isDiscardModalOpen && (
        <DiscardTramiteModal
          isOpen={isDiscardModalOpen}
          onClose={handleCloseDiscardModal}
          onDiscard={handleConfirmDiscard}
          tramite={selectedTramite}
        />
      )}
    </StyledTableWrapper>
  );
};
