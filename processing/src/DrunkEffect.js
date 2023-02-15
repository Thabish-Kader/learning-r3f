import React from "react";
import { Effect } from "postprocessing";
const fragmentShader = `
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = vec4(uv,1.0,1.0);
}
`;
export default class DrunkEffect extends Effect {
	constructor(props) {
		super("DrunkEffect", fragmentShader, {});
		console.log(props);
	}
}
