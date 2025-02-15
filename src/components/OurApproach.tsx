/* eslint-disable react/jsx-no-comment-textnodes */
import "../styles/our-approach.scss";

const OurApproach = () => {
    const steps = [
        {
            number: "1",
            title: "Subscribe & Request",
            description:
                "Become a part of our network by subscribing to our services. Once you're on board, simply submit your request for a new project, and we'll get started on turning your vision into reality.",
        },
        {
            number: "2",
            title: "Design & Build",
            description:
                "Our team gets to work, crafting bespoke designs and developing the core functionality of your project. From the initial concept to full implementation, we focus on creating solutions that are both beautiful and high-performing.",
        },
        {
            number: "3",
            title: "Refine & Evolve",
            description:
                "We believe in continuous improvement. After delivering the initial version, we work closely with you to refine the product based on feedback and evolving needs, ensuring it stays aligned with your business growth.",
        },
    ];

    return (
        <section className="our-approach">
            <div className="container">
                <h2>Our Approach: Simple, Streamlined, Successful</h2>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-content">
                                <div className="step-tag">// STEP {step.number}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className="step-visual">
                                <div className="placeholder">Animated graphic placeholder</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
