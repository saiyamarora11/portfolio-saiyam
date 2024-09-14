"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useCursorStore from "@/app/store/cursorStore";

const MagicCursor: React.FC = () => {
	const { isCursorHidden, cursorType } = useCursorStore();

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};
	const cursorRadius = cursorType ? 120 : 45;

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouse.x.set(e.clientX - cursorRadius / 2);
			mouse.y.set(e.clientY - cursorRadius / 2);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mouse.x, mouse.y, cursorRadius]);

	return (
		<div className="hidden md:block">
			{!isCursorHidden && (
				<motion.div
					style={{
						left: smoothMouse.x,
						top: smoothMouse.y,
						transition: "transform 0.2s ease",
					}}
					className={`pointer-events-none fixed z-[999] rotate-0 rounded-full ${
						cursorType
							? "magic-cursor-expanded"
							: "magic-cursor-default"
					}`}>
					{cursorType
						? cursorType === "card"
							? "[ OPEN ]"
							: "[ About Us ]"
						: ""}
				</motion.div>
			)}
		</div>
	);
};

export default MagicCursor;
