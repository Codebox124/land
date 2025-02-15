import React from "react";

import {
  Container,
  Row,
  Column,
  Section,
  SectionHeader,
  type SectionProps,
  type SectionHeaderProps,
} from "@/components/PageLayout";

import OfferCard, { OfferCardProps } from "./OfferCard";

import styles from "./Offers.module.scss";

export interface OffersProps extends Omit<SectionProps, "children"> {
  header: SectionHeaderProps;
  offers: OfferCardProps[];
}

const Offers: React.FC<OffersProps> = ({ header, offers, ...props }) => {
  return (
    <Section className={styles.offersSection} {...props}>
      <Container>
        <SectionHeader {...header} />

        <Row
          style={{ position: "relative" }}
          spacing="4"
          align="stretch"
          justify="center"
        >
          {offers.map((offer, index) => (
            <Column width={6} key={index} style={{ height: "100%", flex: 1 }}>
              <OfferCard {...offer} />
            </Column>
          ))}
          <div className={styles.glowBg} />
        </Row>
      </Container>
    </Section>
  );
};

export default Offers;
