import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/util/cn";

import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "white" | "background";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant = "primary",
  className,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const content = label || children;

  return (
    <button
      className={cn(
        styles.button,
        styles[`variant-${variant}`],
        icon ? styles.hasIcon : "",
        icon ? styles[`iconPosition-${iconPosition}`] : "",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {content && <span className={styles.content}>{content}</span>}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
