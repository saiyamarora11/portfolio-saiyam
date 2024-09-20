import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import useScrollStore from "@/app/store/scrollStore";

type LenisScrollProviderProps = {
	children: ReactNode;
};

const LenisScrollProvider = ({
	children,
}: LenisScrollProviderProps) => {
	const { inSkillsSection } = useScrollStore();
	const lenisRef = useRef<Lenis | null>(null);

	useLayoutEffect(() => {
		lenisRef.current = new Lenis({
			duration: 1,
		});

		const raf = (time: number) => {
			lenisRef.current?.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => {
			lenisRef.current?.destroy();
		};
	}, []);

	useEffect(() => {
		if (!lenisRef.current) return;
		const lenis = lenisRef.current;

		if (inSkillsSection) {
			lenis.options.duration = 20;
		} else {
			lenis.options.duration = 1;
			lenis.stop();
			lenis.start();
		}
		lenis.raf(performance.now());
	}, [inSkillsSection]);

	return <>{children}</>;
};

export default LenisScrollProvider;
