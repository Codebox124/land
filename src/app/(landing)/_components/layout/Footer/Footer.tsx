import React from "react";
import Image from "next/image";

import { BRAND_LOGO, BRAND_NAME } from "@/@content";

import { Row, Column } from "@/components/PageLayout";

import styles from "./Footer.module.scss";

export interface FooterProps {
  // children: React.ReactNode;

  socials: {
    url: string;
    icon: React.ReactNode;
  }[];
}
const rowPadding = "py-2-5";
const Footer: React.FC<FooterProps> = ({ socials }) => {
  return (
    <footer className={styles.footer}>
      <Row className={rowPadding} align="center">
        <Column width={6}>
          <div className={styles.logoContainer}>
            <Image src={BRAND_LOGO} alt={`${BRAND_NAME} Logo`} />
          </div>
        </Column>
        <Column width={6}>
          <div className={styles.socialsContainer}>
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Column>
      </Row>
      <div className="separator-x" />
      <Row className={rowPadding}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
