import type { SelectHTMLAttributes } from "react";
import "./SelectField.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  helper?: string;
  error?: string;
};

export function SelectField({
  label,
  options,
  placeholder,
  helper,
  error,
  disabled,
  className = "",
  id,
  value,
  ...props
}: SelectFieldProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const state = disabled ? "disabled" : error ? "error" : "default";
  const empty = value === undefined || value === "";

  return (
    <label className={`field field--${state} ${className}`.trim()} htmlFor={selectId}>
      <span className="field__label">{label}</span>
      <span className="field__select-wrap">
        <select
          id={selectId}
          className={`field__input field__select ${empty ? "field__select--empty" : ""}`.trim()}
          disabled={disabled}
          value={value}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="field__select-chevron" aria-hidden="true">
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
      </span>
      {(error || helper) && <span className="field__helper">{error ?? helper}</span>}
    </label>
  );
}
