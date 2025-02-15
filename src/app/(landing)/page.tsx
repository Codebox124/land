import * as Sections from "@/app/(landing)/_components/sections";

import { SECTIONS } from "@/@content";

export default function Home() {
    return (
        <>
            <Sections.Hero {...SECTIONS.HERO} />
            <Sections.Offers {...SECTIONS.OFFERS} />
            <Sections.Testimonials {...SECTIONS.TESTIMONIALS} />
            <Sections.CTA {...SECTIONS.CTA} />
        </>
    );
}
