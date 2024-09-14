import { useEffect, useRef } from "react";
import Lenis from "lenis";
import useScrollStore from "@/app/store/scrollStore";

const useLenis = () => {
	const { inSkillsSection } = useScrollStore();
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const initializeLenis = () => {
			const lerp = inSkillsSection ? 0.005 : 0.1;

			if (lenisRef.current) {
				lenisRef.current.destroy();
			}

			lenisRef.current = new Lenis({
				lerp,
				smoothWheel: true,
				syncTouch: true,
				syncTouchLerp: 0.1,
			});

			const raf = (time: number) => {
				lenisRef.current?.raf(time);
				requestAnimationFrame(raf);
			};

			requestAnimationFrame(raf);
		};

		initializeLenis();

		return () => {
			lenisRef.current?.destroy();
		};
	}, [inSkillsSection]);

	return { adjustScrollSpeed: lenisRef.current?.options.lerp };
};

export default useLenis;
