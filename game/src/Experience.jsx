import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics, Debug } from "@react-three/rapier";
import { Player } from "./Player.jsx";
import useGame from "./stores/useGame.js";
export default function Experience() {
	const blockCount = useGame((state) => state.blocksCount);
	console.log(blockCount);
	return (
		<>
			<OrbitControls makeDefault />
			<Physics>
				{/* <Debug /> */}
				<Lights />
				<Level count={blockCount} />
				<Player />
			</Physics>
		</>
	);
}
