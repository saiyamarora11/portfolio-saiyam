import { create } from "zustand";

type CursorState = {
	isCursorHidden: boolean;
	cursorType: string;
	setIsCursorHidden: (hidden: boolean) => void;
	setCursorType: (type: string) => void;
};

const useCursorStore = create<CursorState>((set) => ({
	isCursorHidden: false,
	cursorType: "",
	setIsCursorHidden: (hidden) => set({ isCursorHidden: hidden }),
	setCursorType: (type) => set({ cursorType: type }),
}));

export default useCursorStore;
