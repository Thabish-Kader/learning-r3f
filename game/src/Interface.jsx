import { useKeyboardControls } from "@react-three/drei";
export const Interface = () => {
	const forward = useKeyboardControls((state) => state.forward);
	const backward = useKeyboardControls((state) => state.backward);
	const leftward = useKeyboardControls((state) => state.leftward);
	const rightward = useKeyboardControls((state) => state.rightward);
	const jump = useKeyboardControls((state) => state.jump);

	return (
		<>
			<div className="interface">
				{/* Time */}
				<div className="time">0.00</div>
				<div className="restart">Restart</div>
			</div>
			<div className="controls">
				<div className="raw">
					<div className={`key ${forward ? "active" : ""}`}></div>
				</div>
				<div className="raw">
					<div className={`key ${leftward ? "active" : ""}`}></div>
					<div className={`key ${backward ? "active" : ""}`}></div>
					<div className={`key ${rightward ? "active" : ""}`}></div>
				</div>
				<div className="raw">
					<div className={`key large ${jump ? "active" : ""}`}></div>
				</div>
			</div>
		</>
	);
};
