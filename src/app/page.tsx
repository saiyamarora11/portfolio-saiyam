"use client";

import {
	Header,
	MagicCursor,
	HeroSection,
	CardScrollSection,
	FeatureSection,
	SkillsCoverSection,
	StudioBanner,
	FooterComponent,
} from "@/app/components";
import useLenis from "@/app/hooks/useLenis";

export default function Home() {
	useLenis();
	return (
		<main className="container-primary">
			<MagicCursor />
			<Header />
			<HeroSection />
			<CardScrollSection />
			<FeatureSection />
			<SkillsCoverSection />
			<StudioBanner />
			<FooterComponent />
		</main>
	);
}
