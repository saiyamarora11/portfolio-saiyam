import { Six_Caps, Poppins } from "next/font/google";

const sixCaps = Six_Caps({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-six-caps",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-poppins",
});

export { sixCaps, poppins };
