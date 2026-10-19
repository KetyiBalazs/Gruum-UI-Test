import type { InputHTMLAttributes } from "react";
import "./Radio.css";

type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "size"
> & {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

export function Radio({
  label,
  name,
  checked,
  onChange,
  disabled,
  className = "",
  id,
  value,
  ...props
}: RadioProps) {
  const inputId =
    id ?? `${name}-${String(value ?? label).toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label
      className={`radio ${disabled ? "radio--disabled" : ""} ${className}`.trim()}
      htmlFor={inputId}
    >
      <span className="radio__control">
        <input
          id={inputId}
          className="radio__input"
          type="radio"
          name={name}
          value={value ?? label}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <span className="radio__dot" aria-hidden="true" />
      </span>
      <span className="radio__label">{label}</span>
    </label>
  );
}
