import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";

import {
	useGLTF,
	useTexture,
	Center,
	Sparkles,
	shaderMaterial,
	OrbitControls,
} from "@react-three/drei";
import portalVertexShader from "./shaders/portal/vertex.glsl";
import portalFragmentShader from "./shaders/portal/fragment.glsl";
import { useRef } from "react";

const PortalMaterial = shaderMaterial(
	{
		uTime: 0,
		uColorStart: new THREE.Color("#ffffff"),
		uColorEnd: new THREE.Color("#000000"),
	},
	portalVertexShader,
	portalFragmentShader
);
extend({
	PortalMaterial,
});
export default function Experience() {
	const { nodes } = useGLTF("./model/portal.glb");
	const portalMaterialRef = useRef();

	const bakedTexture = useTexture("./model/baked.jpg");
	bakedTexture.flipY = false;
	useFrame((state, delta) => {
		portalMaterialRef.current.uTime += delta;
	});
	return (
		<>
			<color args={["#030202"]} attach="background" />
			<OrbitControls makeDefault />
			<Center>
				<mesh geometry={nodes.baked.geometry}>
					<meshBasicMaterial map={bakedTexture} />
				</mesh>

				<mesh
					position={nodes.poleLightA.position}
					geometry={nodes.poleLightA.geometry}
				>
					<meshBasicMaterial color="#ffffe5" />
				</mesh>

				<mesh
					position={nodes.poleLightB.position}
					geometry={nodes.poleLightB.geometry}
				>
					<meshBasicMaterial color="#ffffe5" />
				</mesh>

				<mesh
					geometry={nodes.portalLight.geometry}
					position={nodes.portalLight.position}
					rotation={nodes.portalLight.rotation}
				>
					{/* <shaderMaterial
						vertexShader={portalVertexShader}
						fragmentShader={portalFragmentShader}
						uniforms={{
							uTime: { value: 0 },
							uColorStart: { value: new THREE.Color("#ffffff") },
							uColorEnd: { value: new THREE.Color("#000000") },
					/>
						}} */}
					<portalMaterial ref={portalMaterialRef} />
				</mesh>
				<Sparkles
					position={[0, 1, 0]}
					scale={[4, 2, 4]}
					size={6}
					speed={0.2}
					count={41}
				/>
			</Center>
		</>
	);
}
