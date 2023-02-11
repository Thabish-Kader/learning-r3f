import {
	Float,
	Html,
	OrbitControls,
	TransformControls,
	PivotControls,
	Text,
	MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
	const cubeRef = useRef();
	const sphereRef = useRef();

	return (
		<>
			<OrbitControls makeDefault />
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4}>
				<mesh ref={sphereRef} position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" />
					<Html
						wrapperClass="label"
						position={[1, 1, 0]}
						center
						distanceFactor={6}
						occlude={[sphereRef, cubeRef]}
					>
						That's a sphere 👍
					</Html>
				</mesh>
			</PivotControls>
			<mesh ref={cubeRef} position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color="mediumpurple" />
			</mesh>
			<TransformControls object={cubeRef} mode="translate" />

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				{/* <meshStandardMaterial color="greenyellow" /> */}
				<MeshReflectorMaterial mirror={1} />
			</mesh>
			<Float speed={1} floatIntensity={4}>
				<Text
					font="./bangers-v20-latin-regular.woff"
					color="purple"
					fontSize={2}
					position={[0, 2, 0]}
				>
					Hello World
				</Text>
			</Float>
		</>
	);
}
