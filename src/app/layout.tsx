import type { Metadata } from "next";
import "./globals.css";
import { sixCaps, poppins } from "./font";

export const metadata: Metadata = {
	title: "Montaya",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${sixCaps.variable} ${poppins.variable}`}>
			<body className="font-poppins">{children}</body>
		</html>
	);
}
