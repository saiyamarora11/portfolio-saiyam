"use client";

import React, {
	useEffect,
	useRef,
	useState,
	forwardRef,
} from "react";
import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import OverlayFooter from "./OverlayFooter";
import useCursorStore from "@/app/store/cursorStore";

type CardProps = {
	imgUrl: string;
	title: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ imgUrl, title }, ref) => {
		const { setCursorType } = useCursorStore();
		const vertMargin = 10;
		const containerRef = useRef<HTMLDivElement | null>(null);
		const [maxScrollY, setMaxScrollY] = useState<number>(Infinity);
		const { scrollY } = useScroll({
			target: containerRef,
			offset: ["start end", "end start"],
		});
		const isInView = useInView(containerRef, {
			margin: `0px 0px -${100 - vertMargin}% 0px`,
			once: true,
		});
		const [dynamicStyles, setDynamicStyles] = useState({
			scale: 1,
			filter: 0,
		});

		useEffect(() => {
			if (ref && containerRef.current) {
				if (typeof ref === "function") {
					ref(containerRef.current);
				} else {
					(
						ref as React.MutableRefObject<HTMLDivElement | null>
					).current = containerRef.current;
				}
			}
		}, [ref]);

		useEffect(() => {
			if (isInView) {
				setMaxScrollY(scrollY.get());
			}
		}, [isInView, scrollY]);

		useEffect(() => {
			const handleScroll = () => {
				let animationValue = 1;
				if (scrollY.get() > maxScrollY) {
					animationValue = Math.max(
						0,
						1 - (scrollY.get() - maxScrollY) / 10000,
					);
				}

				setDynamicStyles({
					scale: animationValue,
					filter: (1 - animationValue) * 100,
				});
			};

			const unsubscribe = scrollY.on("change", handleScroll);
			return () => {
				unsubscribe();
			};
		}, [scrollY, maxScrollY]);

		return (
			<div
				ref={containerRef}
				className="card-container"
				style={{
					position: "sticky",
					top: `${vertMargin}vh`,
					height: `${100 - 2 * vertMargin}vh`,
					transform: `scale(${dynamicStyles.scale})`,
					filter: `blur(${dynamicStyles.filter}px)`,
				}}
				onMouseEnter={() => setCursorType("card")}
				onMouseLeave={() => setCursorType("")}>
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "100%",
					}}>
					<Image
						src={imgUrl}
						alt="Card Image"
						fill
						className="object-cover"
						sizes="90vw"
					/>
				</div>
				<OverlayFooter title={title} />
			</div>
		);
	},
);
Card.displayName = "Card";
export default Card;
