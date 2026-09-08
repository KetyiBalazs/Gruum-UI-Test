import "./Tag.css";

type TagProps = {
  label: string;
  variant?: "neutral" | "accent" | "success" | "secondary";
};

export function Tag({ label, variant = "neutral" }: TagProps) {
  return <span className={`tag tag--${variant}`}>{label}</span>;
}
