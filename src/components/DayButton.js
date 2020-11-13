/**
 * This button displays a day of the 43 days. It the day has already passed, the button is enabled
 * and the user can use it to access that day. If not, the button is grayed out.
 */

import React from "react";

import monthsOfTheYear from "../resources/monthsOfTheYear";
import Button from "@material-ui/core/Button";

const DayButton = ({ month, day, disabled, onClick, primary }) => {
	return (
		<Button
			style={{ margin: 5 }}
			onClick={onClick}
			variant={primary ? "contained" : "text"}
			color={primary ? "primary" : "default"}
			disabled={disabled}
		>
			{monthsOfTheYear[month].substring(0, 3)} {day}
		</Button>
	);
};

export default DayButton;
