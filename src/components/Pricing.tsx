import React from "react";
import "../styles/pricing.scss";
import { useTheme } from "@/contexts/ThemeContext";

const pricingPlans = [
  {
    title: "Launch",
    planType: "STARTER PLAN",
    price: "£1234.56",
    per: "PER MONTH",
    description: "Affordable, essential tools for businesses looking to establish a solid digital presence.",
    features: [
      "Custom website with up to 5 pages",
      "Basic UI/UX design",
      "Responsive mobile design",
      "Standard performance optimization",
      "Email and basic form integrations",
      "Up to 2 revisions",
      "2 weeks of post-launch support",
    ],
    buttonText: "Get Started",
    available: true,
  },
  {
    title: "Elevate",
    planType: "GROWTH PLAN",
    price: "£1234.56",
    per: "PER MONTH",
    description: "For growing businesses needing advanced functionality and a polished, scalable solution.",
    features: [
      "Custom website with up to 10 pages",
      "Advanced UI/UX design tailored to your brand",
      "Responsive mobile-first design",
      "Performance optimization and SEO",
      "E-commerce integration or advanced forms",
      "CMS integration (e.g., headless CMS)",
      "Up to 4 revisions",
      "1 month of post-launch support",
    ],
    buttonText: "Get Started",
    available: true,
    popular: true,
  },
  {
    title: "Scale",
    planType: "ENTERPRISE PLAN",
    price: "£1234.56",
    per: "PER MONTH",
    description: "Complete, scalable systems designed for businesses with complex needs and high growth ambitions.",
    features: [
      "Fully custom website with unlimited pages",
      "Premium UI/UX design with custom animations and interactions",
      "JAMstack architecture for top-tier performance",
      "Advanced e-commerce solutions",
      "Headless CMS with personalized content",
      "Unlimited revisions during development",
      "3 months of post-launch support and ongoing optimization",
      "Dedicated account manager",
    ],
    buttonText: "Get Started",
    available: false,
  },
];

const Pricing = () => {
      const { theme } = useTheme();
  return (
   
    <section  className={`pricing ${theme === "dark" ? "dark" : ""}`}>
      <h2 className="pricing-title">Ready to upgrade your business?</h2>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
            <div className="plan-header">
              <p className="plan-type">// {plan.planType}</p>
              <span className={`status ${plan.available ? "available" : "limited"}`}>
                {plan.available ? "Available" : "Limited"}
              </span>
            </div>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <p className="plan-price">{plan.price} <span className="per">{plan.per}</span></p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn">{plan.buttonText}</button>
          </div>
        ))}
      </div>

      <p className="consultation">
        Can't find what you're looking for? Schedule a call with us today.
      </p>
      <button className="consultation-btn">Schedule a consultation</button>
    </section>
  );
};

export default Pricing;
