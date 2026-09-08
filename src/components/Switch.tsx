import switchOff from "../assets/switch-off.svg";
import switchOn from "../assets/switch-on.svg";
import "./Switch.css";

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <button
      type="button"
      className="switch"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <span className="switch__track">
        <img
          src={checked ? switchOn : switchOff}
          alt=""
          width={44}
          height={24}
        />
      </span>
      <span className="switch__label">{label}</span>
    </button>
  );
}
