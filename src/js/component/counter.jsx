import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

export const MyCounter = props => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(seconds => seconds + 1);
		}, props.seconder);
	}, []);

	return (
		<div className="numberBox text-center">
			<span className="numbers">{timer % 10}</span>
		</div>
	);
};

MyCounter.propTypes = {
	seconder: PropTypes.number
};
