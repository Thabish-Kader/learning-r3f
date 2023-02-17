import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
	subscribeWithSelector((set) => {
		return {
			blocksCount: 3,
			// phases
			phase: "ready",
			start: () => {
				set((state) => {
					if (state.phase === "ready") return { phase: "playing" };

					return {};
				});
			},
			restart: () => {
				set((state) => {
					if (state.phase === "playing" || state.phase === "ended")
						return { phase: "ready" };

					return {};
				});
			},
			end: () => {
				set((state) => {
					if (state.phase === "playing") return { phase: "ended" };

					return {};
				});
			},
		};
	})
);
