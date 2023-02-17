import create from "zustand";

export default create((set) => {
	return {
		blocksCount: 3,
		// phases
		phase: "ready",
		start: () => {
			set(() => {
				return { phase: "playing" };
			});
		},
		restart: () => {
			set(() => {
				return { phase: "restart" };
			});
		},
		end: () => {
			set(() => {
				return { phase: "ended" };
			});
		},
	};
});
