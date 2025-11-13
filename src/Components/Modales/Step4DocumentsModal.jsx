import { useState, useRef } from "react";
import { Blanket, Stack, Text, Button, Icon } from "@inubekit/inubekit";
import {
    MdClose,
    MdVisibility,
    MdDeleteOutline,
    MdOutlineDescription,
} from "react-icons/md";
import {
    ModalContainer,
    ModalHeader,
    UploadArea,
    FileCard,
    FileInfo,
    FileTextInfo,
    FileActions,
} from "./Step4DocumentsModal.styles";
export const Step4DocumentsModal = ({
    isOpen,
    onClose,
    document,
    existingFiles = [],
}) => {
    const [uploadedFiles, setUploadedFiles] = useState(existingFiles);
    const fileInputRef = useRef(null);
    if (!isOpen) return null;
    const handleFileSelect = (event) => {
        const file = event.target.files?.[0];
        if (file && uploadedFiles.length < 3) {
            const fileData = {
                id: Date.now(),
                name: file.name,
                size: (file.size / 1024).toFixed(2), // Tamaño en KB
                file: file,
            };
            setUploadedFiles((prev) => [...prev, fileData]);
        } else if (uploadedFiles.length >= 3) {
            alert("Solo puedes subir un máximo de 3 documentos");
        }
        event.target.value = "";
    };
    const handleDeleteFile = (fileId) => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
    };
    const handleViewFile = (file) => {
        const url = URL.createObjectURL(file.file);
        window.open(url, "_blank");
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    return (
        <>
            <Blanket reactPortalId="modal-root" />
            <ModalContainer>
                <ModalHeader>
                    <Text type="title" size="large" appearance="dark" weight="bold">
                        {document?.documento}
                    </Text>
                    <Stack direction="row" gap="8px" alignItems="center">
                        <Text type="label" size="medium" appearance="dark">
                            Cerrar
                        </Text>
                        <Icon
                            icon={<MdClose />}
                            appearance="dark"
                            size="24px"
                            spacing="narrow"
                            cursorHover={true}
                            onClick={onClose}
                        />
                    </Stack>
                </ModalHeader>
                <Stack direction="column" gap="24px">
                    <UploadArea>
                        <Stack direction="column" alignItems="center" gap="16px">
                            <Text type="body" size="large" appearance="gray">
                                Arrastra un archivo
                            </Text>
                            <Text type="body" size="medium" appearance="gray">
                                o
                            </Text>
                            <Button
                                variant="filled"
                                appearance="primary"
                                spacing="wide"
                                onClick={handleButtonClick}
                                disabled={uploadedFiles.length >= 3}
                            >
                                Buscar un archivo
                            </Button>
                        </Stack>
                    </UploadArea>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileSelect}
                        style={{ display: "none" }}
                    />
                    <Text type="title" size="medium" appearance="dark" weight="bold">
                        Archivos adjuntos
                    </Text>
                    {uploadedFiles.length > 0 ? (
                        <Stack direction="row" gap="12px" wrap="wrap">
                            {uploadedFiles.map((file) => (
                                <FileCard key={file.id}>
                                    <FileInfo>
                                        <Icon
                                            icon={<MdOutlineDescription />}
                                            appearance="dark"
                                            size="24px"
                                            spacing="narrow"
                                        />
                                        <FileTextInfo>
                                            <Text
                                                type="label"
                                                size="small"
                                                appearance="dark"
                                                weight="bold"
                                                ellipsis
                                            >
                                                {file.name}
                                            </Text>
                                            <Text type="body" size="small" appearance="gray">
                                                {file.size} KB
                                            </Text>
                                        </FileTextInfo>
                                    </FileInfo>
                                    <FileActions>
                                        <Icon
                                            icon={<MdVisibility />}
                                            appearance="dark"
                                            size="20px"
                                            spacing="narrow"
                                            cursorHover={true}
                                            onClick={() => handleViewFile(file)}
                                        />
                                        <Icon
                                            icon={<MdDeleteOutline />}
                                            appearance="danger"
                                            size="20px"
                                            spacing="narrow"
                                            cursorHover={true}
                                            onClick={() => handleDeleteFile(file.id)}
                                        />
                                    </FileActions>
                                </FileCard>
                            ))}
                        </Stack>
                    ) : (
                        <Text type="body" size="medium" appearance="gray">
                            No hay archivos adjuntos
                        </Text>
                    )}
                    <Stack direction="row" justifyContent="flex-end" gap="16px">
                        <Button
                            variant="outlined"
                            appearance="gray"
                            spacing="wide"
                            onClick={() => onClose(null)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="filled"
                            appearance="primary"
                            spacing="wide"
                            onClick={() => {
                                console.log("Guardar documentos:", uploadedFiles);
                                onClose(uploadedFiles);
                            }}
                        >
                            Adjuntar
                        </Button>
                    </Stack>
                </Stack>
            </ModalContainer>
        </>
    );
};
