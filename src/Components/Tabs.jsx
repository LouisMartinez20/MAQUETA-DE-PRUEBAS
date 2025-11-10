import { Tabs } from "@inubekit/inubekit";
import { MdOutlineReportProblem } from "react-icons/md";
import { useState } from "react";
export const TabsGroup = () => {
  const [selectedTab, setSelectedTab] = useState("reportadas");
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
  const handleChange = (id) => {
    setSelectedTab(id);
  };
  return (
    <Tabs
      tabs={tabs}
      selectedTab={selectedTab}
      onChange={handleChange}
      scroll={false}
    />
  );
};
