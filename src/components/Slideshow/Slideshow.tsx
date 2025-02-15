"use client";
import React, { useEffect, useRef } from "react";

import { cn } from "@/util/cn";

import styles from "./Slideshow.module.scss";

export interface SlideshowProps {
  scrollSpeedSeconds?: number;
  direction?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const SlideshowItem = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.slideshowItem}>{children}</div>;
};

export default function Slideshow({
  scrollSpeedSeconds = 20,
  direction = "right",
  className,
  children,
}: SlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--scroll-speed-time",
        `${scrollSpeedSeconds}s`
      );
    }
  }, [children, scrollSpeedSeconds]);

  return (
    <div ref={containerRef} className={cn(styles.slideshow, className)}>
      <div className={cn(styles.slideshowContent, styles[direction])}>
        {children}
        {children}
      </div>
    </div>
  );
}
