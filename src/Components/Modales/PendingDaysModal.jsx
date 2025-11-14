import { useState } from "react";
import {
  Blanket,
  Stack,
  Text,
  Icon,
  Button,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@inubekit/inubekit";
import { MdClose } from "react-icons/md";
import {
  StyledModalContainer,
  StyledModalHeader,
} from "./PendingDaysModal.styles";

export const PendingDaysModal = ({
  isOpen,
  onClose,
  pendingTotal = 0,
  pendingRows = [],
  usedTotal = 0,
  usedRows = [],
}) => {
  const [selectedTab, setSelectedTab] = useState("pendientes");

  if (!isOpen) return null;

  const tabs = [
    { id: "pendientes", label: "Días pendientes" },
    { id: "utilizados", label: "Días utilizados" },
  ];

  const Summary = ({ label, value }) => (
    <Stack direction="row" gap="8px" alignItems="baseline">
      <Text type="body" size="medium" appearance="gray">
        {label}
      </Text>
      <Text type="title" size="medium" appearance="primary" weight="bold">
        {value}
      </Text>
    </Stack>
  );

  const PendingContent = () => (
    <Stack direction="column" gap="16px">
      <Summary
        label="Total de días pendientes a la fecha:"
        value={pendingTotal}
      />
      <Table
        tableLayout="fixed"
        borderCollapse="collapse"
        borderWidth="1px"
        borderStyle="solid"
      >
        <Thead>
          <Tr>
            <Th align="left">
              <Text
                as="span"
                type="title"
                size="small"
                appearance="dark"
                weight="bold"
              >
                Contrato
              </Text>
            </Th>
            <Th align="center" width="140px">
              <Text
                as="span"
                type="title"
                size="small"
                appearance="dark"
                weight="bold"
              >
                Días pendientes
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {pendingRows.map((row, idx) => (
            <Tr key={idx}>
              <Td align="left" appearance="light" type="text">
                {row.contrato}
              </Td>
              <Td align="center" appearance="light" type="text">
                {row.dias}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );

  const UsedContent = () => (
    <Stack direction="column" gap="16px">
      <Summary label="Total de días utilizados a la fecha:" value={usedTotal} />
      <Table
        tableLayout="fixed"
        borderCollapse="collapse"
        borderWidth="1px"
        borderStyle="solid"
      >
        <Thead>
          <Tr>
            <Th align="left">
              <Text
                as="span"
                type="title"
                size="small"
                appearance="dark"
                weight="bold"
              >
                Fecha de inicio o pago
              </Text>
            </Th>
            <Th align="left">
              <Text
                as="span"
                type="title"
                size="small"
                appearance="dark"
                weight="bold"
              >
                Modalidad
              </Text>
            </Th>
            <Th align="center" width="100px">
              <Text
                as="span"
                type="title"
                size="small"
                appearance="dark"
                weight="bold"
              >
                Días
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {usedRows.map((row, idx) => (
            <Tr key={idx} zebra={idx % 2 === 1}>
              <Td align="left" appearance="light" type="text">
                {row.fecha}
              </Td>
              <Td align="left" appearance="light" type="text">
                {row.modalidad}
              </Td>
              <Td align="center" appearance="light" type="text">
                {row.dias}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );

  return (
    <Blanket>
      <StyledModalContainer>
        <StyledModalHeader>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type="title" size="large" weight="bold">
              Días pendientes
            </Text>
            <Icon
              icon={<MdClose />}
              appearance="dark"
              size="24px"
              cursorHover={true}
              onClick={onClose}
            />
          </Stack>
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            onChange={setSelectedTab}
            scroll={false}
          />
        </StyledModalHeader>

        <Stack padding="24px" direction="column" gap="20px">
          {selectedTab === "pendientes" ? <PendingContent /> : <UsedContent />}
          <Stack direction="row" justifyContent="flex-end">
            <Button appearance="primary" onClick={onClose}>
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </StyledModalContainer>
    </Blanket>
  );
};
