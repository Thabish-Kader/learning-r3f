import { OrbitControls } from "@react-three/drei";
import { useGLTF, useTexture, Center } from "@react-three/drei";

export default function Experience() {
	const { nodes } = useGLTF("./model/portal.glb");
	const bakedTexture = useTexture("./model/baked.jpg");
	bakedTexture.flipY = false;
	console.log(nodes);
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
			</Center>
		</>
	);
}
