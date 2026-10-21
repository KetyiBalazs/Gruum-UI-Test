import { useEffect, useId, useRef, useState } from "react";
import "./Menu.css";

type MenuOption = {
  label: string;
  value: string;
};

type MenuProps = {
  label: string;
  options: MenuOption[];
  value: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  helper?: string;
  disabled?: boolean;
  className?: string;
};

export function Menu({
  label,
  options,
  value,
  onSelect,
  placeholder = "Select an option",
  helper,
  disabled = false,
  className = "",
}: MenuProps) {
  const reactId = useId();
  const menuId = `menu-${reactId.replace(/:/g, "")}`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);
  const empty = !selected;

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        surfaceRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={`menu ${disabled ? "menu--disabled" : ""} ${className}`.trim()}>
      <span className="menu__label" id={`${menuId}-label`}>
        {label}
      </span>
      <div className="menu__anchor">
        <button
          ref={triggerRef}
          type="button"
          id={`${menuId}-trigger`}
          className={`menu__trigger ${empty ? "menu__trigger--empty" : ""} ${open ? "menu__trigger--open" : ""}`.trim()}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          aria-labelledby={`${menuId}-label ${menuId}-trigger`}
          disabled={disabled}
          onClick={() => setOpen((current) => !current)}
        >
          <span>{selected?.label ?? placeholder}</span>
          <span className="menu__chevron" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 4.25L6 7.75L9.5 4.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          ref={surfaceRef}
          id={menuId}
          role="menu"
          className={`menu__popup ${open ? "menu__popup--open" : ""}`.trim()}
          hidden={!open}
          aria-labelledby={`${menuId}-label`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitem"
              className="menu__item"
              onClick={() => {
                onSelect(option.value);
                setOpen(false);
                triggerRef.current?.focus();
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {helper ? <span className="menu__helper">{helper}</span> : null}
    </div>
  );
}
