import { CSSProperties, FC, ReactNode } from "react";
import "./button.css";

interface ButtonProps extends CSSProperties {
  className?: string;
  buttonName: string;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  buttonName,
  icon,

  ...styles
}) => {
  return (
    <div>
      <button className={`my-button ${className || ""}`} style={styles}>
        {buttonName}
        {icon}
      </button>
    </div>
  );
};
