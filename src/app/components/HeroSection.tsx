"use client";
import {
	AnimatedLetters,
	HeroSectionDescription,
} from "@/app/components/HeroSectionComponents";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MagneticButton from "@/app/components/MagneticButton";
import useScrollStore from "@/app/store/scrollStore";

const HeroSection = () => {
	const { firstCardRef } = useScrollStore();
	const scrollToCard = () => {
		if (firstCardRef?.current) {
			firstCardRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="hero-section-container relative">
			<div className="p-10">
				<AnimatedLetters />
				<HeroSectionDescription />
			</div>
			<div className="hero-footer">
				<div
					onClick={scrollToCard}
					className="z-[100] flex cursor-pointer items-center gap-x-6">
					<button>Scroll to Explore</button>
					<MagneticButton>
						<button>
							<ChevronDownIcon className="size-5 text-white" />
						</button>
					</MagneticButton>
				</div>
				<p>Featured Projects</p>
			</div>
		</div>
	);
};

export default HeroSection;
