import React from "react";
import { OFFER_FEATURE_ICON } from "@/@content/sections/offers";

import Card from "@/components/Card";

import styles from "./OfferCard.module.scss";
import { cn } from "@/util/cn";

export interface OfferCardProps {
  icon: React.ReactNode;
  title: string;

  features: {
    title: string;
    description: string;
  }[];
}

const OfferCard: React.FC<OfferCardProps> = ({ icon, title, features }) => {
  return (
    <Card className={styles.offerCard}>
      <div className={styles.offerHeader}>
        <div className={styles.offerIcon}>{icon}</div>
        <h3>{title}</h3>
        <div className="separator-x" />
      </div>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index}>
            <h4>
              <OFFER_FEATURE_ICON
                className={cn(styles.featureIcon, "text-primary-gradient")}
              />
              {feature.title}
            </h4>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OfferCard;
