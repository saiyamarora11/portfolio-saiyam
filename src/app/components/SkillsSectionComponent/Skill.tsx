import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollStore from "@/app/store/scrollStore";

type SkillProps = {
	children: ReactNode;
	isFirst?: boolean;
	isLast?: boolean;
};

const Skill = ({ children, isFirst, isLast }: SkillProps) => {
	const element = useRef(null);
	const { setScrollStatus } = useScrollStore();
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start end", "start start"],
	});

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.7, 1],
		[0.4, 0.4, 1],
	);
	const color = useTransform(
		scrollYProgress,
		[0, 0.7, 1],
		["#FFFFFF20", "#FFFFFF20", "#FFFFFF"],
	);

	useEffect(() => {
		if (isFirst && scrollYProgress.get() >= 0.7) {
			console.log("Entering Skills Section: Slowing down scroll");
			setScrollStatus(true);
		}
		if (isLast && scrollYProgress.get() === 1) {
			console.log("Leaving Skills Section: Restoring normal scroll");
			setScrollStatus(false);
		}
	}, [scrollYProgress, isFirst, isLast, setScrollStatus]);

	return (
		<motion.li
			ref={element}
			style={{ opacity, color }}
			transition={{ duration: 0.5 }}
			className="skill-text-style">
			{children}
		</motion.li>
	);
};

export default Skill;
