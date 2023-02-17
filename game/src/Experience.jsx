import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics, Debug } from "@react-three/rapier";
import { Player } from "./Player.jsx";
export default function Experience() {
	return (
		<>
			<OrbitControls makeDefault />
			<Physics>
				{/* <Debug /> */}
				<Lights />
				<Level />
				<Player />
			</Physics>
		</>
	);
}
