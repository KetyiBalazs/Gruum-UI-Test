import type { InputHTMLAttributes } from "react";
import "./Checkbox.css";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "size"
> & {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label
      className={`checkbox ${disabled ? "checkbox--disabled" : ""} ${className}`.trim()}
      htmlFor={inputId}
    >
      <span className="checkbox__control">
        <input
          id={inputId}
          className="checkbox__input"
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          {...props}
        />
        <span className="checkbox__box" aria-hidden="true">
          {checked ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.25 6.25L4.75 8.75L9.75 3.25"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
}
