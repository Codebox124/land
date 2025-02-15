import React, { ReactNode } from "react";

import { Breakpoints } from "@/@design/build/types";
import designTokens from "@/@design/tokens.json";

import { cn } from "@/util/cn";

import styles from "./Column.module.scss";

type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
type Breakpoint = keyof Breakpoints;

type ColumnWidths = {
  [key in Breakpoint]?: ColumnWidth;
};

export interface ColumnProps
  extends ColumnWidths,
    React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: ColumnWidth;
  offset?: ColumnWidth;
  className?: string;
}

const Column: React.FC<ColumnProps> = ({
  children,
  width = "auto",
  offset,
  className = "",
  ...props
}) => {
  const breakpointClasses = React.useMemo(() => {
    const breakpoints = extractBreakpointsFromProps(props);
    return generateBreakpointClasses(breakpoints);
  }, [props]);

  return (
    <div
      className={cn(
        styles.col,
        styles[`col-${width}`],
        offset ? styles[`offset-${offset}`] : "",
        breakpointClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

function generateBreakpointClasses(breakpoints: ColumnWidths) {
  return Object.entries(breakpoints)
    .filter(([, value]) => value !== undefined)
    .map(([breakpoint, value]) => styles[`${breakpoint}\:col-${value}`])
    .join(" ");
}

function extractBreakpointsFromProps(props: Partial<ColumnProps>) {
  return Object.keys(designTokens.breakpoints).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: props[breakpoint as keyof ColumnWidths],
    }),
    {} as ColumnWidths
  );
}

export default Column;
