import React from 'react';

export interface Tab {
  id: string;
  label: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: React.ReactNode;
}

export function Tabs({ tabs, activeTab, onTabChange, children }: TabsProps) {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-6 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-8 py-2.5 font-semibold rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-[#78C850] text-white'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
