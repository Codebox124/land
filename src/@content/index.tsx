import type { Metadata } from "next";
import {
  SiX,
  SiInstagram,
  SiYoutube,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

import type { FooterProps } from "@/app/(landing)/_components/layout/Footer";
import * as common from "./common";

import HERO_SECTION from "./sections/hero";
import OFFERS_SECTION from "./sections/offers";
import CTA_SECTION from "./sections/cta";
import TESTIMONIALS_SECTION from "./sections/testimonials";

export const BRAND_NAME = common.BRAND_NAME;
export const BRAND_LOGO = common.BRAND_LOGO;

export const METADATA: Metadata = {
  title: `${common.BRAND_NAME}`,
  description: "",
};

export const SECTIONS = {
  HERO: HERO_SECTION,
  OFFERS: OFFERS_SECTION,
  TESTIMONIALS: TESTIMONIALS_SECTION,
  CTA: CTA_SECTION,
};

export const FOOTER = {
  socials: [
    {
      url: "https://twitter.com/",
      icon: <SiX />,
    },
    {
      url: "https://www.instagram.com/",
      icon: <SiInstagram />,
    },
    {
      url: "https://www.youtube.com/",
      icon: <SiYoutube />,
    },
    {
      url: "https://www.tiktok.com/",
      icon: <SiTiktok />,
    },
  ],
} as const satisfies FooterProps;
