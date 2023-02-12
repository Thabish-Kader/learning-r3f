import { Clone, useGLTF } from "@react-three/drei";

export const Model = () => {
	const model = useGLTF("./hamburger-draco.glb");
	console.log(useGLTF);
	return (
		<>
			<Clone object={model.scene} scale={0.35} position-y={-1} />;
			<Clone object={model.scene} scale={0.35} position-x={-4} />;
			<Clone object={model.scene} scale={0.35} position-x={4} />;
		</>
	);
};
useGLTF.preload("./hamburger-draco.glb");
