import React, { ReactNode } from "react";
import { cn } from "@/util/cn";

import styles from "./Section.module.scss";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn(styles.section, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
