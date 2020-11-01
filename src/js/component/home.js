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
	const tickers = [1000000, 100000, 10000, 1000];
	for (let i = 0; i < numberOfBoxes; i++) {
		items.push(<MyCounter seconder={tickers[i]} />);
	}
	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div>
			<div className="mt-5 d-flex justify-content-center">{items}</div>
			<div onClick={refreshPage}>
				<MyButton />
			</div>
		</div>
	);
}
