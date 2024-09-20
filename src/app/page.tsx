"use client";

import {
	Header,
	MagicCursor,
	HeroSection,
	CardScrollSection,
	FeatureSection,
	SkillsCoverSection,
	StudioBanner,
	LenisScrollProvider,
} from "@/app/components";

export default function Home() {
	return (
		<LenisScrollProvider>
			<main className="container-primary">
				<MagicCursor />
				<Header />
				<HeroSection />
				<CardScrollSection />
				{/* <FeatureSection /> */}
				<SkillsCoverSection />
				<StudioBanner />
			</main>
		</LenisScrollProvider>
	);
}
