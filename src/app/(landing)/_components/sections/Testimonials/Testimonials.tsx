import React from "react";

import { Container, Section, SectionHeader, type SectionProps, type SectionHeaderProps } from "@/components/PageLayout";
import { cn } from "@/util/cn";

import Slideshow, { SlideshowItem } from "@/components/Slideshow";

import ReviewCard, { ReviewCardProps } from "./ReviewCard";
import styles from "./Testimonials.module.scss";

export interface TestimonialsProps extends Omit<SectionProps, "children"> {
    header: SectionHeaderProps;
    reviews: ReviewCardProps[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ header, reviews, className, ...props }) => {
    return (
        <Section className={cn(styles.testimonialsSection, className)} {...props}>
            <Container>
                <SectionHeader {...header} />

                <Slideshow direction="left">
                    {reviews.map((review, index) => (
                        <SlideshowItem key={index}>
                            <ReviewCard {...review} />
                        </SlideshowItem>
                    ))}
                </Slideshow>
            </Container>
        </Section>
    );
};

export default Testimonials;
