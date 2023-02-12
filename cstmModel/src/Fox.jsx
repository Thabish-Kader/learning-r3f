import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export const Fox = (props) => {
	const foxModel = useGLTF("./Fox/glTF/Fox.gltf");
	const animations = useAnimations(foxModel.animations, foxModel.scene);
	const { animationName } = useControls({
		animationName: { options: animations.names },
	});

	useEffect(() => {
		const action = animations.actions[animationName];
		action.reset().fadeIn(0.5).play();

		// window.setTimeout(() => {
		// 	animations.actions.Walk.play();
		// 	animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
		// }, 2000);
		return () => {
			action.fadeOut(0.5);
		};
	}, [animationName]);
	return <primitive {...props} object={foxModel.scene} />;
};
