"use client";

import React, { useRef } from "react";
import { cn } from "@/util/cn";
import styles from "./MouseSkew.module.scss";

export interface MouseSkewProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    maxSkewDegrees?: number;
}

const MouseSkew: React.FC<MouseSkewProps> = ({ children, className, maxSkewDegrees = 0.5, ...props }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * maxSkewDegrees;
        const rotateX = ((centerY - y) / centerY) * maxSkewDegrees;

        requestAnimationFrame(() => {
            if (!cardRef.current) return;
            cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
            cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty("--rotate-x", "0deg");
        cardRef.current.style.setProperty("--rotate-y", "0deg");
    };

    return (
        <div
            ref={cardRef}
            className={cn(styles.MouseSkew, className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    );
};

export default MouseSkew;
