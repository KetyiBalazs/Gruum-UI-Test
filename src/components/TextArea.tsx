import type { TextareaHTMLAttributes } from "react";
import "./InputField.css";
import "./TextArea.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helper?: string;
  error?: string;
};

export function TextArea({
  label,
  helper,
  error,
  disabled,
  className = "",
  id,
  rows = 4,
  ...props
}: TextAreaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const state = disabled ? "disabled" : error ? "error" : "default";

  return (
    <label className={`field field--${state} ${className}`.trim()} htmlFor={inputId}>
      <span className="field__label">{label}</span>
      <textarea
        id={inputId}
        className="field__input field__textarea"
        disabled={disabled}
        rows={rows}
        {...props}
      />
      {(error || helper) && (
        <span className="field__helper">{error ?? helper}</span>
      )}
    </label>
  );
}
