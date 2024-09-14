"use client";
import React from "react";
import { ShareIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import MagneticButton from "@/app/components/MagneticButton";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="footer-style">
			<div
				className="flex cursor-pointer items-center space-x-4"
				onClick={scrollToTop}>
				<MagneticButton>
					<button>
						<ChevronUpIcon className="size-5 text-white" />
					</button>
				</MagneticButton>

				<span className="hidden md:block">Back Top</span>
			</div>
			<div>2024 © ClaPat. All rights reserved.</div>
			<div className="hidden md:block">
				<div className="flex items-center space-x-4">
					<span>Follow Us</span>
					<span>
						<ShareIcon className="size-5 text-white" />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
