import { useState } from "react";

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, onTabChange }) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="tabs-container w-full flex flex-wrap border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button flex-1 py-2 text-center font-medium text-sm sm:text-base ${
            activeTabId === tab.id
              ? "border-b-2 border-blue-500 text-blue-500"
              : ""
          } hover:text-blue-500 transition-all sm:px-4 md:px-6`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
