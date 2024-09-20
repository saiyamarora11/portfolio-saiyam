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
		{ icon: "", title: "PROJECT 1" },
		{ icon: "", title: "PROJECT 2" },
		{ icon: "", title: "PROJECT 3" },
		{ icon: "", title: "PROJECT 4" },
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
