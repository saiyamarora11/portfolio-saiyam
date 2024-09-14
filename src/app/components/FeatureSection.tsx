"use client";
import { motion } from "framer-motion";
import useCursorStore from "@/app/store/cursorStore";
import MagneticButton from "@/app/components/MagneticButton";

const FeatureSection = () => {
	const { setIsCursorHidden } = useCursorStore();

	return (
		<div className="feature-section-container">
			<p className="max-w-2xl px-4 text-white opacity-40">
				CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH
				THE SCIENCE OF SELLING PRODUCTS.
			</p>
			<MagneticButton>
				<div className="mt-10">
					<motion.a
						onMouseEnter={() => setIsCursorHidden(true)}
						onMouseLeave={() => setIsCursorHidden(false)}
						className="text-md rounded-full border border-white px-8 py-3"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						See All Works
					</motion.a>
				</div>
			</MagneticButton>
		</div>
	);
};

export default FeatureSection;
