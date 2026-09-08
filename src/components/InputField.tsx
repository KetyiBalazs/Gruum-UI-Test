import type { InputHTMLAttributes } from "react";
import "./InputField.css";

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  helper?: string;
  error?: string;
};

export function InputField({
  label,
  helper,
  error,
  disabled,
  className = "",
  id,
  ...props
}: InputFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const state = disabled ? "disabled" : error ? "error" : "default";

  return (
    <label className={`field field--${state} ${className}`.trim()} htmlFor={inputId}>
      <span className="field__label">{label}</span>
      <input id={inputId} className="field__input" disabled={disabled} {...props} />
      {(error || helper) && (
        <span className="field__helper">{error ?? helper}</span>
      )}
    </label>
  );
}
