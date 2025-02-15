import React from "react";

import ContentText from "@/components/ContentText";
import { cn } from "@/util/cn";

import styles from "./SectionHeader.module.scss";
import Button, { type ButtonProps } from "@/components/Button/Button";

type SectionHeaderSize = "base" | "lg";
type SectionHeaderAlign = "left" | "center";

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  descriptionMuted?: boolean;
  __enableDangerousHTML?: boolean;
  size?: SectionHeaderSize;
  align?: SectionHeaderAlign;

  buttons?: ButtonProps[];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  descriptionMuted = true,
  className,
  __enableDangerousHTML,
  size = "base",
  align = "center",
  buttons,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.sectionHeader,
        styles[`size-${size}`],
        styles[`align-${align}`],
        className
      )}
      {...props}
    >
      <ContentText
        as="h1"
        className={styles.title}
        text={title}
        __enableDangerousHTML={__enableDangerousHTML}
      />

      <ContentText
        as="p"
        className={cn(styles.description, {
          ["text-text-muted"]: descriptionMuted,
        })}
        text={description}
        __enableDangerousHTML={__enableDangerousHTML}
      />

      {buttons && buttons.length > 0 && (
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionHeader;
