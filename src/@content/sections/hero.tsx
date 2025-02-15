import type { HeroProps } from "@/app/(landing)/_components/sections";
import { CTA_MAIN, CTA_SECONDARY } from "../common";

const HERO_SECTION = {
  header: {
    title:
      "Lorem <span class='text-primary-gradient'>Ipsum Dolor</span> Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    __enableDangerousHTML: true,
    buttons: [CTA_MAIN, CTA_SECONDARY],
  },
} as const satisfies HeroProps;

export default HERO_SECTION;
