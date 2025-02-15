import type { OffersProps } from "@/app/(landing)/_components/sections";
import { House, ArrowBigRight } from "lucide-react";

export const OFFER_FEATURE_ICON = ArrowBigRight;

const OFFERS_SECTION = {
    header: {
        title: "Become part of the <span class='text-primary-gradient'>1%</span>",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        __enableDangerousHTML: true,
    },
    offers: [
        {
            title: "Lorem",
            icon: <House />,
            features: [
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
        },
        {
            title: "Ipsum",
            icon: <House />,
            features: [
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Lorem Ipsum Title",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
        },
    ],
} as const satisfies OffersProps;

export default OFFERS_SECTION;
