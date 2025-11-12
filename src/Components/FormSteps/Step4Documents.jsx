import { useState } from "react";
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
import { Step4DocumentsModal } from "../Modales/Step4DocumentsModal";

export const Step4Documents = ({ documents, setDocuments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const data = [
    {
      id: "cita_medica_programada",
      documento: "Cita médica programada - (Opcional)",
    },
    {
      id: "incapacidad_medica_eps",
      documento:
        "Incapacidad médica emitida por una EPS o prepagada - *Requerido*",
    },
    {
      id: "orden_medica_tratamiento",
      documento:
        "Orden médica de tratamiento, examen especializado o recuperación post-operatoria - (Opcional)",
    },
  ];

  const handleAttachClick = (document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const handleCloseModal = (uploadedFiles) => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      setDocuments((prev) => ({
        ...prev,
        [selectedDocument.id]: {
          documentName: selectedDocument.documento,
          files: uploadedFiles,
        },
      }));
    }
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

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
            <Th align="center" width="80px">
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
          {data.map((item) => (
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

      {isModalOpen && (
        <Step4DocumentsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          document={selectedDocument}
          existingFiles={documents[selectedDocument?.id]?.files || []}
        />
      )}
    </>
  );
};
