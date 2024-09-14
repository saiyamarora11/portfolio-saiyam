"use client";
import {
	AnimatedLetters,
	StudioSectionDescription,
} from "@/app/components/StudioSection";
import useCursorStore from "@/app/store/cursorStore";

const StudioBanner = () => {
	const { setCursorType } = useCursorStore();
	return (
		<div
			className="studio-section"
			onMouseEnter={() => setCursorType("about_us")}
			onMouseLeave={() => setCursorType("")}>
			<StudioSectionDescription />
			<AnimatedLetters />
		</div>
	);
};

export default StudioBanner;
