import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Experience = () => {
	const cubeRef = useRef(null);
	const groupRef = useRef(null);
	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});
	return (
		<>
			<group ref={groupRef}>
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
			</group>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshBasicMaterial color="greenyellow" />
			</mesh>
		</>
	);
};
