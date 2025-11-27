import { useState, useCallback } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Icon,
  Blanket,
  Stack,
  Button,
} from "@inubekit/inubekit";
import { MdAttachFile, MdClose } from "react-icons/md";
import { StyledModalContainer, StyledModalHeader } from "./modal.styles.js";
import { Step4DocumentsModal } from "./Step4DocumentsModal";
import { DOCUMENTS_DATA } from "../FormSteps/Step4Documents";
export const FilesModal = ({ isOpen, onClose, data }) => {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [documents, setDocuments] = useState({});
  const handleAttachClick = useCallback((document) => {
    setSelectedDocument(document);
    setIsDocModalOpen(true);
  }, []);
  const handleCloseDocModal = (uploadedFiles) => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      setDocuments((prev) => ({
        ...prev,
        [selectedDocument.id]: {
          documentName: selectedDocument.documento,
          files: uploadedFiles,
        },
      }));
    }
    setIsDocModalOpen(false);
    setSelectedDocument(null);
  };
  const handleClose = () => {
    onClose();
  };
  if (!isOpen) return null;
  return (
    <Blanket portalId="modal-root">
      <StyledModalContainer>
        <StyledModalHeader>
          <Stack direction="column" gap="8px" width="100%">
            <Stack justifyContent="space-between" alignItems="center">
              <Text type="title" size="large" weight="bold">
                Documentos - {data?.reason}
              </Text>
              <Icon
                icon={<MdClose />}
                appearance="dark"
                size="24px"
                cursorHover={true}
                onClick={handleClose}
              />
            </Stack>
            <Text type="body" size="medium" appearance="gray">
              Adjunta los documentos requeridos para esta ausencia
            </Text>
          </Stack>
        </StyledModalHeader>
        <Stack padding="24px" direction="column" gap="24px">
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
                <Th align="center" width="80px" action="true">
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
              {DOCUMENTS_DATA.map((item) => (
                <Tr key={item.id}>
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
                      onClick={() => handleAttachClick(item)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Stack justifyContent="flex-end">
            <Button onClick={handleClose}>Cerrar</Button>
          </Stack>
        </Stack>
      </StyledModalContainer>
              {isDocModalOpen && (
          <Step4DocumentsModal
            isOpen={isDocModalOpen}
            onClose={handleCloseDocModal}
            document={selectedDocument}
            existingFiles={documents[selectedDocument?.id]?.files || []}
          />
        )}
    </Blanket>
  );
};
