import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
export const MyCanvas = () => {
	return (
		<Canvas
			flat
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [1, 2, 6],
			}}
		>
			<Experience />
		</Canvas>
	);
};
