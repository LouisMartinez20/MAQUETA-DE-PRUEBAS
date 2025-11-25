import { Tabs } from "@inubekit/inubekit";
import { MdOutlineReportProblem } from "react-icons/md";

export const TabsGroup = ({ selectedTab, onTabChange }) => {
  const tabs = [
    {
      id: "reportadas",
      label: "Ausencias reportadas",
    },
    {
      id: "tramite",
      label: "Solicitudes de ausencia en trámite",
      icon: {
        appearance: "warning",
        icon: <MdOutlineReportProblem size={16} />,
      },
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      selectedTab={selectedTab}
      onChange={onTabChange}
      scroll={false}
    />
  );
};
