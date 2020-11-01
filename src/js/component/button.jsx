import React from "react";

import PreopTypes from "prop-types";

import Button from "react-bootstrap/Button";

export const MyButton = props => {
	return (
		<div className="d-flex justify-content-center">
			<Button variant="btn btn-outline-dark">Reset</Button>
		</div>
	);
};
