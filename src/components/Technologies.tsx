/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import "../styles/technologies.scss";

const Technologies = () => {
    const techLogos = [
        {
            name: "Tailwind CSS",
            logo: "https://placehold.co/600x400/png",
            alt: "Tailwind CSS Logo",
        },
        {
            name: "React",
            logo: "https://placehold.co/600x400/png",
            alt: "React Logo",
        },
        {
            name: "Jamstack",
            logo: "https://placehold.co/600x400/png",
            alt: "Jamstack Logo",
        },
        {
            name: "Node.js",
            logo: "https://placehold.co/600x400/png",
            alt: "Node.js Logo",
        },
        {
            name: "AWS",
            logo: "https://placehold.co/600x400/png",
            alt: "AWS Logo",
        },
        {
            name: "GraphQL",
            logo: "https://placehold.co/600x400/png",
            alt: "GraphQL Logo",
        },
    ];

    return (
        <section className="technologies">
            <div className="container">
                <div className="section-tag">// WHAT WE USE</div>

                <h2 className="sub-title">Cutting-Edge Technologies, Maximum Impact</h2>

                <p className="description">
                    We utilise the latest and most powerful development tools to build innovative, high-performance solutions. From modern
                    frameworks like React and Next.js to scalable infrastructure with AWS and Kubernetes, our tech stack ensures your
                    projects are not only future-proof but also optimised for speed, security, and growth. With a focus on efficiency and
                    flexibility, we create systems that adapt to your business&apos;s evolving needs.
                </p>

                <div className="tech-grid">
                    {techLogos.map((tech, index) => (
                        <div key={index} className="tech-logo">
                            <Image src={tech.logo || "/placeholder.svg"} alt={tech.alt} width={150} height={50} className="logo-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
