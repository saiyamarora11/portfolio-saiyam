import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type SkillProps = {
	children: ReactNode;
};

const Skill = ({ children }: SkillProps) => {
	const element = useRef(null);
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
