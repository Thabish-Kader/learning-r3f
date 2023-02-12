import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
export const Model = () => {
	const model = useLoader(
		GLTFLoader,
		"./FlightHelmet/glTF/FlightHelmet.gltf",
		(loader) => {
			const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath("./draco/");
			loader.setDRACOLoader(dracoLoader);
		}
	);
	return <primitive object={model.scene} scale={5} position-y={-1} />;
};
