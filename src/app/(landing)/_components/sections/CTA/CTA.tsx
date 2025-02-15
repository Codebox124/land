import React from "react";
import Image, { type StaticImageData } from "next/image";

import {
  Container,
  Section,
  SectionHeader,
  type SectionProps,
  type SectionHeaderProps,
} from "@/components/PageLayout";

import styles from "./CTA.module.scss";

export interface CTAProps extends Omit<SectionProps, "children"> {
  header: SectionHeaderProps;
  maxHeaderWidthPx?: number;
  backgroundImage?: StaticImageData;
}

const CTA: React.FC<CTAProps> = ({
  header,
  maxHeaderWidthPx,
  backgroundImage,
  ...props
}) => {
  return (
    <Section className={styles.ctaSection} {...props}>
      <Container>
        <SectionHeader
          {...{ ...header, size: "lg" }}
          className={styles.ctaHeader}
          style={maxHeaderWidthPx ? { maxWidth: `${maxHeaderWidthPx}px` } : {}}
        />
        {backgroundImage && (
          <Image
            className={styles.ctaBackgroundImage}
            src={backgroundImage}
            alt="CTA Background"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </Container>
    </Section>
  );
};

export default CTA;
