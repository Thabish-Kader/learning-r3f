import { OrbitControls } from "@react-three/drei";
import { useGLTF, useTexture, Center, Sparkles } from "@react-three/drei";

export default function Experience() {
	const { nodes } = useGLTF("./model/portal.glb");
	const bakedTexture = useTexture("./model/baked.jpg");
	bakedTexture.flipY = false;

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
				></mesh>
				<Sparkles position={[0, 1, 0]} scale={3} size={6} />
			</Center>
		</>
	);
}
