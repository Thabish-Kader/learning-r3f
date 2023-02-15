import React from "react";
import DrunkEffect from "./DrunkEffect";

export const Drunk = (props) => {
	const effect = new DrunkEffect(props);
	return <primitive object={effect} />;
};
