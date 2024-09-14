"use client";
import { motion } from "framer-motion";

const letters = "MONTOYA".split("");

const AnimatedLetters = () => {
	return (
		<div className="flex items-end justify-center">
			{letters.map((letter, index) => (
				<motion.div
					key={index}
					className="animation-letters-style"
					whileHover={{
						scaleY: 1.5,
						originY: 0.75,
						transition: { duration: 0.5 },
					}}
					whileTap={{
						scaleY: 1.5,
						originY: 0.75,
						transition: { duration: 0.5 },
					}}>
					{letter}
				</motion.div>
			))}
		</div>
	);
};

export default AnimatedLetters;
