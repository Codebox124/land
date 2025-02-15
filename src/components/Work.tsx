/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Image from "next/image";
import "../styles/work.scss";

const Work = () => {
    const [expandedWork, setExpandedWork] = useState<number | null>(null);

    const workItems = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Custom shopping experience with advanced features",
            image: "https://placehold.co/600x400/png",
        },
        {
            id: 2,
            title: "Healthcare Portal",
            description: "Secure patient management system",
            image: "https://placehold.co/600x400/png",
        },
        {
            id: 3,
            title: "Financial Dashboard",
            description: "Real-time data visualization platform",
            image: "https://placehold.co/600x400/png",
        },
        {
            id: 4,
            title: "Mobile App",
            description: "Cross-platform delivery service application",
            image: "https://placehold.co/600x400/png",
        },
    ];

    return (
        <section className="work">
            <div className="container">
                <div className="section-tag">// OUR WORK</div>

                <h2>Proven Success with Industry Leaders</h2>

                <p className="description">
                    Discover how we&apos;ve helped businesses like yours enhance their digital presence with custom development solutions.
                </p>

                <div className="work-grid">
                    {workItems.map((item) => (
                        <div
                            key={item.id}
                            className={`work-card ${expandedWork === item.id ? "expanded" : ""}`}
                            onClick={() => setExpandedWork(expandedWork === item.id ? null : item.id)}
                        >
                            <div className="card-content">
                                <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                    className="work-image"
                                />
                                <div className="placeholder-text">
                                    Work placeholder
                                    <br />
                                    clicks to expand
                                    <br />
                                    below
                                </div>
                            </div>

                            {expandedWork === item.id && (
                                <div className="expanded-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
