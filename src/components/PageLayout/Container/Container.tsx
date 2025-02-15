import React, { ReactNode } from "react";

import { cn } from "@/util/cn";

import styles from "./Container.module.scss";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.fluid]: fluid,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
