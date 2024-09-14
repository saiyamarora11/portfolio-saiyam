import React, { useEffect, useRef } from "react";
import Card from "./Card";
import useScrollStore from "@/app/store/scrollStore";

const CardScrollSection = () => {
	const firstCardRef = useRef<HTMLDivElement>(null);
	const { setFirstCardRef } = useScrollStore();

	useEffect(() => {
		setFirstCardRef(firstCardRef);
	}, [setFirstCardRef]);

	const images = [
		{ icon: "01hero.jpg", title: "WHITE LINERS" },
		{ icon: "02hero.jpg", title: "GREEN AUDIO" },
		{ icon: "03hero.jpg", title: "NANOTECH" },
		{ icon: "04hero.jpg", title: "COOL DUDE" },
		{ icon: "05hero.jpg", title: "SPHERE DIGITAL" },
	];

	return (
		<section className="relative flex flex-col gap-[10vh] py-[10vh]">
			{images.map((img, idx) => (
				<Card
					key={idx}
					imgUrl={`/${img.icon}`}
					title={img.title}
					ref={idx === 0 ? firstCardRef : null}
				/>
			))}
		</section>
	);
};

export default CardScrollSection;
