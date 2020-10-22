import React from "react";

import { Mycounter } from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { MyCounter } from "./counter.jsx";

import { MyButton } from "./button.jsx";

//create your first component
export function Home() {
	const numberOfBoxes = 4;
	const items = [];
	const tickers = [100000, 10000, 1000, 100];
	for (let i = 0; i < numberOfBoxes; i++) {
		items.push(<MyCounter seconder={tickers[i]} />);
	}

	return (
		<div>
			<div className="mt-5 d-flex justify-content-center">{items}</div>
			<MyButton />
		</div>
	);
}
