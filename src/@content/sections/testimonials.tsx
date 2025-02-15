import type { TestimonialsProps } from "@/app/(landing)/_components/sections";

import avatar from "../assets/images/testimonials/avatars/avatar.png";

const TESTIMONIALS_SECTION = {
    header: {
        title: "Don't just take <span class='text-primary-gradient'>our word for it</span>",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        __enableDangerousHTML: true,
    },

    reviews: [
        {
            avatar: avatar,
            name: "John Smith",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            avatar: avatar,
            name: "Sarah Johnson",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            avatar: avatar,
            name: "Michael Brown",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            avatar: avatar,
            name: "Emily Davis",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ],
} as const satisfies TestimonialsProps;

export default TESTIMONIALS_SECTION;
