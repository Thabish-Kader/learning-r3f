import { useRef } from "react";
// import { useHelper } from "@react-three/drei";
// import * as THREE from "three";
export default function Lights() {
	const lightRef = useRef();
	// useHelper(lightRef, THREE.DirectionalLightHelper, 1);
	return (
		<>
			<directionalLight
				ref={lightRef}
				castShadow
				position={[4, 4, 1]}
				intensity={1.5}
				shadow-mapSize={[1024, 1024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
			/>
			<ambientLight intensity={0.5} />
		</>
	);
}
