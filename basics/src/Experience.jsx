import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Experience = () => {
	const cubeRef = useRef(null);
	useFrame(() => {
		cubeRef.current.rotation.y += 0.01;
	});
	return (
		<>
			<mesh position-x={-2}>
				<sphereGeometry />
				<meshBasicMaterial color="orange" />
			</mesh>

			<mesh
				ref={cubeRef}
				rotation-y={Math.PI * 0.25}
				position-x={2}
				scale={1.5}
			>
				<boxGeometry />
				<meshBasicMaterial color="mediumpurple" />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshBasicMaterial color="greenyellow" />
			</mesh>
		</>
	);
};
