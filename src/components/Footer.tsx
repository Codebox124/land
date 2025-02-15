"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../@content/assets/images/TheDevCasa_Logo@2x.png";
import "../styles/footer.scss";

// Fix too since it's part of the home page
const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`footer ${theme === "dark" ? "dark" : ""}`}>
            <div className="container">
                <div className="footer-grid">
                    {/* TheDevCasa Column */}
                    <div className="footer-column">
                        <h3>TheDevCasa</h3>
                        <ul>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/work">Work</Link>
                            </li>
                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/legal">Legal Information</Link>
                            </li>
                            <li>
                                <Link href="/cookies">Cookies</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empty Columns for Spacing */}
                    <div className="footer-column"></div>

                    {/* Logo and Copyright */}
                    <div className="footer-column">
                        <div className="logo-copyright">
                            <div className="copyright">TheDevCasa 2024 ©</div>
                            <Image src={logo || "/placeholder.svg"} alt="TheDevCasa Logo" width={60} height={60} className="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
