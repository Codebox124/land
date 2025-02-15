/* eslint-disable react/jsx-no-comment-textnodes */
import { Laptop, Palette, ShoppingCart, Network, BarChart } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/services-section.scss";

const ServicesSection = () => {
    const { theme } = useTheme();

    const services = [
        {
            icon: <Laptop />,
            title: "Custom Web Development",
            description:
                "We build tailored web solutions that are scalable, secure, and designed for your business. From concept to deployment, we deliver code that's clean, efficient, and built for performance.",
        },
        {
            icon: <Palette />,
            title: "UI/UX Design",
            description:
                "Our user-centric design approach ensures that every interaction is seamless and intuitive, creating a cohesive experience that delights your customers while enhancing usability and engagement.",
        },
        {
            icon: <ShoppingCart />,
            title: "E-commerce Solutions",
            description:
                "We create powerful e-commerce platforms that optimize conversions and streamline your operations. From custom storefronts to backend integrations, we provide the tools to sell smarter and scale faster.",
        },
        {
            icon: <Network />,
            title: "System Integration",
            description:
                "Unify your business systems with seamless integrations that streamline workflows, improve data accuracy, and reduce inefficiencies. Our solutions connect your tools to work smarter, not harder.",
        },
        {
            icon: <BarChart />,
            title: "Digital Strategy and Consulting",
            description:
                "We provide expert digital strategy and consulting services that align technology with your business goals. Let us help you navigate the digital landscape and build solutions that deliver results.",
        },
    ];

    return (
        <div className={`services-section ${theme === "dark" ? "dark" : ""}`}>
            <div className="container">
                <div className="section-title">// WHAT WE DO</div>

                <div className="content-grid">
                    <div className="text-content">
                        <div>
                            <h1>
                                Custom Development & Design
                                <br />
                                Services Tailored for Your Business
                            </h1>

                            <p>
                                Our solutions are built around your specific needs. Whether it&apos;s custom development, UI/UX design, or
                                full-stack integrations, we ensure that every piece of your online ecosystem is seamlessly connected and
                                optimized for performance.
                            </p>
                        </div>

                        <div className="services-list">
                            {services.map((service, index) => (
                                <div key={index} className="service-item">
                                    <div className="icon-container">{service.icon}</div>
                                    <div className="service-details">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="image-section">
                        <div className="website-example">
                            <div>
                                <div className="placeholder-text">Website example placeholder</div>
                                <div className="scroll-text">Scroll with section</div>
                            </div>
                        </div>
                        <div className="website-example">
                            <div className="placeholder-text">Website example placeholder</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
