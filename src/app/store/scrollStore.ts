import { create } from "zustand";
import { RefObject } from "react";

type ScrollState = {
	inSkillsSection: boolean;
	firstCardRef: RefObject<HTMLDivElement> | null;
	setScrollStatus: (status: boolean) => void;
	setFirstCardRef: (ref: RefObject<HTMLDivElement>) => void;
};

const useScrollStore = create<ScrollState>((set) => ({
	inSkillsSection: false,
	firstCardRef: null,
	setScrollStatus: (status: boolean) =>
		set({ inSkillsSection: status }),
	setFirstCardRef: (ref: RefObject<HTMLDivElement>) =>
		set({ firstCardRef: ref }),
}));

export default useScrollStore;
