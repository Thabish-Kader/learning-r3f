import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
export default function Experience() {
	const { position, color, visibile } = useControls({
		position: { value: -2, min: -4, max: 4, step: 0.01 },
		color: "#ff0000",
		visibile: true,
	});
	console.log(position);
	return (
		<>
			<Perf position="top-left" />
			<OrbitControls makeDefault />

			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<mesh position-x={position}>
				<sphereGeometry />
				<meshStandardMaterial color={color} />
			</mesh>

			<mesh position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color="mediumpurple" />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
		</>
	);
}
