import { Cylinder, OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import {
	InstancedRigidBodies,
	BallCollider,
	CuboidCollider,
	CylinderCollider,
	Debug,
	RigidBody,
	Physics,
} from "@react-three/rapier";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
	const [hitSound, setHitSound] = useState(() => new Audio("./hit.mp3"));
	const model = useGLTF("./hamburger.glb");
	const cube = useRef();
	const twister = useRef();
	const cubeTransform = useMemo(() => {
		const positions = [];
		const rotations = [];
		const scales = [];
		for (let i = 0; i < cubeCount; i++) {
			positions.push([i * 2, 0, 0]);
			rotations.push([0, 0, 0]);
			scales.push([1, 1, 1]);
		}
		return { positions, rotations, scales };
	}, []);

	const cubeJump = () => {
		cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
		cube.current.applyTorqueImpulse({
			x: Math.random() - 0.5,
			y: Math.random() - 0.5,
			z: Math.random() - 0.5,
		});
	};
	useFrame((state, delta) => {
		const time = state.clock.getElapsedTime();
		const eulerRotation = new THREE.Euler(0, time * 3, 0);
		const quarternionRotation = new THREE.Quaternion();
		quarternionRotation.setFromEuler(eulerRotation);
		twister.current.setNextKinematicRotation(quarternionRotation);

		const angle = time * 0.5;
		const x = Math.cos(angle) * 2;
		const z = Math.sin(angle) * 2;
		twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
	});
	const collisionEnter = () => {
		// hitSound.currentTime = 0;
		// hitSound.volume = Math.random();
		// hitSound.play();
	};
	const cubeCount = 3;
	const cubes = useRef();

	useEffect(() => {
		for (let i = 0; i < cubeCount; i++) {
			const matrix = new THREE.Matrix4();
			matrix.compose(
				new THREE.Vector3(i * 2, 0, 0),
				new THREE.Quaternion(),
				new THREE.Vector3(1, 1, 1)
			);
			cubes.current.setMatrixAt(i, matrix);
		}
	}, []);
	return (
		<>
			<Perf position="top-left" />

			<OrbitControls makeDefault />

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<Physics gravity={[0, -1.6, 0]}>
				<Debug />
				<RigidBody colliders="ball">
					<mesh castShadow position={[-1.5, 2, 0]}>
						<sphereGeometry />
						<meshStandardMaterial color="orange" />
					</mesh>
				</RigidBody>
				<RigidBody position={[1.5, 2, 0]}>
					<mesh castShadow>
						<boxGeometry />
						<meshStandardMaterial color="mediumpurple" />
					</mesh>
				</RigidBody>

				<RigidBody type="fixed">
					<mesh receiveShadow position-y={-1.25}>
						<boxGeometry args={[10, 0.5, 10]} />
						<meshStandardMaterial color="greenyellow" />
					</mesh>
				</RigidBody>
				<RigidBody
					ref={twister}
					position={[0, -0.8, 0]}
					friction={0}
					type="kinematicPosition"
					onCollisionEnter={collisionEnter}
				>
					<mesh castShadow scale={[0.4, 0.4, 3]}>
						<boxGeometry />
						<meshStandardMaterial color="red" />
					</mesh>
				</RigidBody>
				<RigidBody position={[0, 4, 0]} colliders={false}>
					<primitive object={model.scene} scale={0.25} />
					<CylinderCollider args={[0.5, 1.25]} />
				</RigidBody>
				<RigidBody type="fixed">
					<CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />
					<CuboidCollider
						args={[5, 2, 0.5]}
						position={[0, 1, -5.5]}
					/>
					<CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
					<CuboidCollider
						args={[0.5, 2, 5]}
						position={[-5.5, 1, 0]}
					/>
				</RigidBody>
				<InstancedRigidBodies
					positions={cubeTransform.positions}
					rotations={cubeTransform.rotations}
					scales={cubeTransform.scales}
				>
					<instancedMesh ref={cubes} args={[null, null, cubeCount]}>
						<boxGeometry />
						<meshStandardMaterial color="tomato" />
					</instancedMesh>
				</InstancedRigidBodies>
			</Physics>
		</>
	);
}
