import React, { useRef } from "react";
import { CustomObject } from "./CustomObject";
import { OrbitControls } from "@react-three/drei";
export const Experience = () => {
	const cubeRef = useRef(null);
	const groupRef = useRef(null);

	return (
		<>
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<group ref={groupRef}>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" />
				</mesh>

				<mesh
					ref={cubeRef}
					rotation-y={Math.PI * 0.25}
					position-x={2}
					scale={1.5}
				>
					<boxGeometry />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</group>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color="greenyellow" />
			</mesh>
			<CustomObject />
		</>
	);
};
