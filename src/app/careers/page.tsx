import { CareersHero } from "@/components/careers/CareersHero";
import { WeHearYou } from "@/components/careers/WeHearYou";
import { CareersValues } from "@/components/careers/CareersValues";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { Cta } from "@/components/home/Cta";

export const metadata = {
    title: "Careers | Syntax - Build Extraordinary Software",
    description: "Join our team of expert engineers and designers. Explore our open positions and start your journey at Syntax.",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <CareersHero />
            <WeHearYou />
            <CareersValues />
            <OpenPositions />
            <Cta />
        </main>
    );
}
