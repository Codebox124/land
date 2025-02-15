import { ArrowRightIcon } from "lucide-react";

import { ButtonProps } from "@/components/Button/Button";

import LogoImage from "./assets/images/logo.png";

export const BRAND_NAME = "Lorem Ipsum";
export const BRAND_LOGO = LogoImage;

export const CTA_MAIN = {
  label: "Lorem Ipsum",
  variant: "primary",
  icon: <ArrowRightIcon />,
  iconPosition: "right",
} as const satisfies ButtonProps;

export const CTA_SECONDARY = {
  label: "Dolor Sit",
  variant: "white",
  icon: <ArrowRightIcon />,
  iconPosition: "left",
} as const satisfies ButtonProps;
