import { useFrame } from "@react-three/fiber";
import {
	Stage,
	Lightformer,
	Environment,
	ContactShadows,
	AccumulativeShadows,
	OrbitControls,
	useHelper,
	RandomizedLight,
	BakeShadows,
	softShadows,
	Sky,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import * as THREE from "three";
export default function Experience() {
	const cube = useRef();

	const directionalLight = useRef();
	useFrame((state, delta) => {
		cube.current.rotation.y += delta * 0.2;
	});

	useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

	const { color, opacity, blur } = useControls("contact shadow", {
		color: "#000000",
		opacity: { value: 0.5, min: 0, max: 1 },
		blur: { value: 1, min: 0, max: 10 },
	});

	const { sunPosition } = useControls("sky", {
		sunPosition: { value: [1, 2, 3] },
	});

	const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
		useControls("environment map", {
			envMapIntensity: { value: 7, min: 0, max: 12 },
			envMapHeight: { value: 7, min: 0, max: 100 },
			envMapRadius: { value: 28, min: 10, max: 1000 },
			envMapScale: { value: 100, min: 10, max: 1000 },
		});
	return (
		<>
			{/* <Environment
				preset="sunset"
				ground={{
					height: envMapHeight,
					radius: envMapRadius,
					scale: envMapScale,
				}}
			> */}
			{/* <color args={["black"]} attach="background" />
				<Lightformer
					position-z={-5}
					scale={10}
					color="red"
					intensity={10}
					form="ring"
				/> */}
			{/* <mesh position-z={-5} scale={10}>
					<planeGeometry />
					<meshBasicMaterial color={[10, 0, 0]} />
				</mesh> */}
			{/* </Environment> */}
			{/* <BakeShadows /> */}

			<Perf position="top-left" />

			<OrbitControls makeDefault />

			{/* <AccumulativeShadows
				position={[0, -0.99, 0]}
				scale={10}
				color="#316d39"
				frames={Infinity}
				temporal
				blend={100}
			>
				<RandomizedLight
					amount={8}
					radius={1}
					ambient={0.5}
					intensity={1}
					position={[1, 2, 3]}
					bias={0.001}
				/>
			</AccumulativeShadows> */}
			{/* <ContactShadows
				position={[0, 0, 0]}
				scale={10}
				resolution={128}
				far={5}
				color={color}
				opacity={opacity}
				blur={blur}
				frames={1}
			/> */}
			{/* <directionalLight
				ref={directionalLight}
				position={sunPosition}
				intensity={1.5}
				castShadow
				shadow-mapSize={[1024, 1024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={5}
				shadow-camera-right={5}
				shadow-camera-bottom={-5}
				shadow-camera-left={-5}
			/> */}
			{/* <ambientLight intensity={0.5} /> */}
			{/* <Sky sunPosition={sunPosition} /> */}
			<Stage
				shadows={{ type: "contact", opacity: 0.2, blur: 3 }}
				environment="sunset"
				preset="portrait"
				intensity={2}
			>
				<mesh position-y={1} castShadow position-x={-2}>
					<sphereGeometry />
					<meshStandardMaterial
						color="orange"
						envMapIntensity={envMapIntensity}
					/>
				</mesh>

				<mesh
					position-y={1}
					castShadow
					ref={cube}
					position-x={2}
					scale={1.5}
				>
					<boxGeometry />
					<meshStandardMaterial
						color="mediumpurple"
						envMapIntensity={envMapIntensity}
					/>
				</mesh>
			</Stage>

			{/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial
					color="greenyellow"
					envMapIntensity={envMapIntensity}
				/>
			</mesh> */}
		</>
	);
}
