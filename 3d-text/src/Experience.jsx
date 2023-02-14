import {
	OrbitControls,
	Text3D,
	Center,
	useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();
export default function Experience() {
	const [matcapTexture] = useMatcapTexture(
		"7B5254_E9DCC7_B19986_C8AC91",
		256
	);
	const donutRef = useRef();
	const tempArray = [...Array(100)];
	useEffect(() => {
		matcapTexture.encoding = THREE.sRGBEncoding;
		matcapTexture.needsUpdate = THREE.sRGBEncoding;
		material.matcap = matcapTexture;
		material.needsUpdate = matcapTexture;
	}, []);
	console.log(donutRef);
	// useFrame((state, delta) => {
	// 	for (const donut of donutRef.current.children) {
	// 		donut.rotation.y += delta * 0.1;
	// 	}
	// });
	return (
		<>
			<Perf position="top-left" />

			<OrbitControls makeDefault />
			<Center>
				<Text3D
					size={0.75}
					height={0.2}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelOffset={0}
					bevelSegments={5}
					font="./fonts/helvetiker_regular.typeface.json"
				>
					HELLO R3F
					<meshMatcapMaterial matcap={matcapTexture} />
				</Text3D>
			</Center>
			<group ref={donutRef}>
				{[...Array(100)].map((_, index) => (
					<mesh
						key={index}
						position={[
							(Math.random() - 0.5) * 10,
							(Math.random() - 0.5) * 10,
							(Math.random() - 0.5) * 10,
						]}
						scale={0.2 + Math.random() * 0.2}
						rotation={[
							Math.random() * Math.PI,
							Math.random() * Math.PI,
							0,
						]}
					>
						<torusGeometry args={[1, 0.6, 16, 32]} />
						<meshMatcapMaterial matcap={matcapTexture} />
					</mesh>
				))}
			</group>
		</>
	);
}
