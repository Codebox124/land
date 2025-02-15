/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../@content/assets/images/TheDevCasa_Logo@2x.png";
import ServicesSection from "@/components/ServicesSection";
import "../styles/page.scss";
import OurApproach from "@/components/OurApproach";
import WhyChooseUs from "@/components/WhyChooseUs";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Work from "@/components/Work";

// import WhatWeUse from "@/components/WhatWeUse";

const Page = () => {
    const { theme, toggleTheme } = useTheme();

    // Add theme class to body
    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <>
            <div className="page-container">
                {/* Logo */}
                <div className="logo-container">
                    <Image src={logo || "/placeholder.svg"} alt="logo" height={89} width={83} />
                </div>

                {/* Navbar */}
                <nav className="navbar">
                    <div className="nav-content">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <span className="nav-text">EN</span>
                        <span className="nav-text">About</span>
                        <span className="nav-text">Work</span>
                        <span className="nav-text">Pricing</span>
                        <button className="get-started">
                            <div className="icon-container">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <p className="text">GET STARTED</p>
                        </button>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="main-content">
                    <div className="content-wrapper">
                        <div className="subtitle">// ENGINEERED DIGITAL TRANSFORMATION</div>
                        <h1>Custom Development</h1>
                        <h2>Seamless Design</h2>
                        <h3>Powerful Results</h3>
                        <p>
                            Your partner in custom development and design that <span>transforms your digital landscape.</span>
                        </p>
                        <div className="button-group">
                            <button className="primary-button">
                                Let&apos;s talk
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="secondary-button">
                                Schedule a consultation
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </main>

                {/* Bottom Blob */}
                <div className="bottom-blob" />
            </div>
            <ServicesSection />
            <WhyChooseUs />
            <OurApproach />
            <Technologies />
            <Work />
            <Pricing />
            <Faq />
        </>
    );
};

export default Page;
