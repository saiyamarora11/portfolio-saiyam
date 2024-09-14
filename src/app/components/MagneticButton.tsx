import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

type FramerProps = {
	children: ReactNode;
};

const MagneticButton: React.FC<FramerProps> = ({ children }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const { clientX, clientY } = e;
		const { height, width, left, top } =
			ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX, y: middleY });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;
	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
				mass: 0.5,
			}}>
			{children}
		</motion.div>
	);
};

export default MagneticButton;
