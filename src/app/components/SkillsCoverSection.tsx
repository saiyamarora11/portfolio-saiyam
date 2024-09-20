import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Skill from "@/app/components/SkillsSectionComponent/Skill";
import useScrollStore from "@/app/store/scrollStore";

const SkillsCoveredSection = () => {
	const container = useRef<HTMLDivElement>(null);
	const { setScrollStatus } = useScrollStore();
	const isInView = useInView(container, { amount: 0.5, once: false });

	useEffect(() => {
		setScrollStatus(isInView);
	}, [isInView, setScrollStatus]);

	return (
		<div
			ref={container}
			className="relative max-h-full overflow-y-visible">
			<div className="sticky top-20 z-[100] mb-20 mt-10 text-center text-sm font-bold">
				MY SKILLS
			</div>
			<motion.div>
				<ul className="skills-list">
					{[
						"REACT",
						"VUE.JS",
						"UI/UX DESIGN",
						"JAVASCRIPT",
						"TYPESCRIPT",
						"CSS3 & SASS",
						"TAILWIND",
						"RESPONSIVE WEB DESIGN",
					].map((skill, index, array) => (
						<Skill key={index}>{skill}</Skill>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default SkillsCoveredSection;
