import React, { ReactNode } from "react";
import { Spacing as SpacingFromConfig } from "@/@design/build/types";
import { cn } from "@/util/cn";

import styles from "./Row.module.scss";

type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";
type Spacing = keyof SpacingFromConfig;

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: JustifyContent;
  align?: AlignItems;
  spacing?: Spacing;
  className?: string;
  noWrap?: boolean;

  children: ReactNode;
}

const Row: React.FC<RowProps> = ({
  children,
  justify = "start",
  align = "stretch",
  spacing = "0",
  className = "",
  noWrap = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.row,
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        styles[`spacing-${spacing}`],
        noWrap ? styles.noWrap : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
