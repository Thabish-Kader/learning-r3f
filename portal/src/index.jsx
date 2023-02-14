import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Message } from "./Message";
import { MyCanvas } from "./MyCanvas";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<>
		<MyCanvas />
		<Message />
	</>
);
