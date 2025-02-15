import React from "react";
import Image from "next/image";

import { BRAND_LOGO, BRAND_NAME } from "@/@content";

import { Container, Section, SectionHeader, type SectionProps, type SectionHeaderProps } from "@/components/PageLayout";

import { cn } from "@/util/cn";

import styles from "./Hero.module.scss";

export interface HeroProps extends Omit<SectionProps, "children"> {
    header: SectionHeaderProps;
    videoUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ header, ...props }) => {
    return (
        <Section className={cn(styles.heroSection, "pt-3 pb-0")} {...props}>
            <Container>
                <Image
                    src={BRAND_LOGO}
                    alt={BRAND_NAME}
                    width={400}
                    className={cn(styles.logo, "mb-14", "animate-slideFromTop animation-delay-2")}
                />

                <SectionHeader className={cn("animate-fadeIn", "mb-20")} {...{ ...header, size: "lg" }}>
                    <div className={cn(styles.glowBgShine, "animate-fadeIn", "animation-delay-1")} />
                </SectionHeader>
            </Container>
            <div className={cn(styles.glowBgBase, "animate-fadeIn", "animation-delay-2")} />
        </Section>
    );
};

export default Hero;
