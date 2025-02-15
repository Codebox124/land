import type { CTAProps } from "@/app/(landing)/_components/sections";
import { CTA_MAIN, CTA_SECONDARY } from "../common";

const CTA_SECTION = {
  header: {
    title: "Lorem Ipsum <span class='text-primary-gradient'>Dolor Sit</span> Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
    __enableDangerousHTML: true,
    buttons: [CTA_MAIN, CTA_SECONDARY],
  },
} as const satisfies CTAProps;

export default CTA_SECTION;
