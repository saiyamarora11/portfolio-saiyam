"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";
import useCursorStore from "@/app/store/cursorStore";
import MagneticButton from "@/app/components/MagneticButton";

const Header: React.FC = () => {
	const { setIsCursorHidden } = useCursorStore();
	return (
		<header className="header">
			<div className="flex items-center">
				<button
					onMouseEnter={() => setIsCursorHidden(true)}
					onMouseLeave={() => setIsCursorHidden(false)}
					className="logo-button relative !h-14 !w-14"
					style={{ position: "relative" }}>
					<Image
						src={Logo}
						alt="Logo"
						fill
						sizes="(max-width: 600px) 100vw, 50vw"
						style={{ objectFit: "contain" }}
					/>
				</button>
			</div>
			<div className="flex items-center space-x-8 text-sm">
				<span className="hidden md:block">Menu</span>
				<MagneticButton>
					<button>
						<Bars2Icon className="size-6 text-white" />
					</button>
				</MagneticButton>
			</div>
		</header>
	);
};

export default Header;
