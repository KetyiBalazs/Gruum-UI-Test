import { type ReactNode, useId, useState } from "react";
import "./Tabs.css";

type TabItem = {
  id: string;
  label: string;
  panel: ReactNode;
};

type TabsProps = {
  label: string;
  items: TabItem[];
  defaultValue?: string;
  className?: string;
};

export function Tabs({ label, items, defaultValue, className = "" }: TabsProps) {
  const reactId = useId();
  const baseId = `tabs-${reactId.replace(/:/g, "")}`;
  const [selected, setSelected] = useState(defaultValue ?? items[0]?.id ?? "");

  return (
    <div className={`tabs ${className}`.trim()}>
      <div className="tabs__list" role="tablist" aria-label={label}>
        {items.map((item) => {
          const active = item.id === selected;
          return (
            <button
              key={item.id}
              type="button"
              id={`${baseId}-tab-${item.id}`}
              className={`tabs__tab ${active ? "tabs__tab--selected" : ""}`.trim()}
              role="tab"
              aria-selected={active}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setSelected(item.id)}
            >
              <span className="tabs__label">{item.label}</span>
              <span className="tabs__indicator" aria-hidden="true" />
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        const active = item.id === selected;
        return (
          <div
            key={item.id}
            id={`${baseId}-panel-${item.id}`}
            className="tabs__panel"
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={!active}
          >
            {item.panel}
          </div>
        );
      })}
    </div>
  );
}
