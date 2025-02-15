"use client";
import React from "react";

import { cn } from "@/util/cn";

import MouseSkew from "@/components/MouseSkew";

import styles from "./Card.module.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxSkewDegrees?: number;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <MouseSkew
      className={cn(styles.card, className)}
      {...props}
      maxSkewDegrees={1.5}
    >
      {children}
      <div className={styles.cardGlow} />
    </MouseSkew>
  );
};

export default Card;
