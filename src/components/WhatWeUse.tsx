/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useTheme } from "@/contexts/ThemeContext";
import "../styles/what-we-use.scss";

const WhatWeUse = () => {
    const { theme } = useTheme();

    return (
        <section className={`${theme === "dark" ? "dark" : ""} what-we-use`}>
            <h2 className="heading">Our Approach: Simple, Streamlined, Successful</h2>
            <div className="stepContainer">
                <div className="stepCard">
                    <p className="stepNumber">// STEP 1</p>
                    <h3 className="stepTitle">Subscribe & Request</h3>
                    <p className="stepDescription">
                        Become a part of our network by subscribing to our services. Once you&apos;re on board, simply submit your request
                        for a new project, and we’ll get started on turning your vision into reality.
                    </p>
                    <img
                        src="https://tailwindcss.com/_next/static/media/logo.1e71db9c02f7c3a6abef2a0b5d7cfb70.svg"
                        alt="Tailwind CSS Logo"
                        className="stepImage"
                    />
                </div>
                <div className="stepCard">
                    <p className="stepNumber">// STEP 2</p>
                    <h3 className="stepTitle">Design & Build</h3>
                    <p className="stepDescription">
                        Our team gets to work, crafting bespoke designs and developing the core functionality of your project. From the
                        initial concept to full implementation, we focus on creating solutions that are...
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="stepImage" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeUse;
