import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  trailingIcon?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "small",
  loading = false,
  trailingIcon = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "•••" : children}
      {!loading && trailingIcon ? <span className="btn__icon">→</span> : null}
    </button>
  );
}
