import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

export const MyCounter = () => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval({ interval });
	}, []);

	return (
		<div className="numberBox text-center">
			<span>{timer}</span>
		</div>
	);
};
