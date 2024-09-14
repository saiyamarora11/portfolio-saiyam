"use client";

type OverlayFooterProps = {
	title: string;
};

const OverlayFooter = ({ title }: OverlayFooterProps) => {
	return (
		<>
			<div className="overlay-footer">
				<button className="tag-overlay hidden md:block">2024</button>
				<h1 className="overlay-title-style">{title}</h1>
				<span className="tag-overlay hidden md:block">PHOTO</span>
			</div>
			<div className="absolute top-8 flex w-full items-center justify-between px-4 text-white sm:hidden">
				<button className="tag-overlay">2024</button>
				<span className="tag-overlay">PHOTO</span>
			</div>
		</>
	);
};

export default OverlayFooter;
