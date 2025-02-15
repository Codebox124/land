/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import { FaCode, FaCogs, FaDollarSign } from "react-icons/fa";
import "../styles/why-choose-us.scss";
import { useTheme } from "@/contexts/ThemeContext";

const WhyChooseUs = () => {
    const { theme } = useTheme();

    return (
        <section className={`${theme === "dark" ? "dark" : ""} why-choose-us`}>
            <div className="content">
                <p className="tag">// WHY CHOOSE US</p>
                <h2>
                    Why Businesses Trust Us to <br /> Power Their Digital Transformation
                </h2>
                <p className="description">
                    We deliver more than just a website. We build scalable, high-performance systems that provide measurable results for
                    your business.
                </p>
                <button className="cta-button">
                    Let&apos;s talk <span className="arrow">&#x2192;</span>
                </button>
            </div>
            <div className="features">
                <FeatureCard
                    icon={<FaCode />}
                    title="Proven development frameworks"
                    description="We use industry-standard technologies that ensure your solutions are built to grow with your business."
                />
                <FeatureCard
                    icon={<FaCogs />}
                    title="Tailored, custom-built solutions"
                    description="We design and develop systems specifically for your business, ensuring they meet your unique needs."
                />
                <FeatureCard
                    icon={<FaDollarSign />}
                    title="Competitive pricing"
                    description="We offer cost-effective solutions that deliver premium results, providing value without breaking your budget."
                />
            </div>
        </section>
    );
};

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
    return (
        <div className="feature-card">
            <div className="icon">{icon}</div>
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WhyChooseUs;
