import React from "react";
import Image, { StaticImageData } from "next/image";

import Card from "@/components/Card";

import styles from "./ReviewCard.module.scss";

export interface ReviewCardProps {
  avatar: StaticImageData;
  name: string;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  name,
  description,
}) => {
  return (
    <Card className={styles.reviewCard}>
      <div className={styles.header}>
        <h3>@{name}</h3>
        <div className={styles.avatar}>
          <Image src={avatar} alt={name} />
        </div>
      </div>

      <div className="separator-x mt-2 mb-3" />

      <p>{description}</p>
      
    </Card>
  );
};

export default ReviewCard;
