/**
 * This button displays a day of the 43 days. It the day has already passed, the button is enabled
 * and the user can use it to access that day. If not, the button is grayed out.
 */

import React from "react";

import monthsOfTheYear from "../resources/monthsOfTheYear";

const DayButton = ({ month, day, disabled, onClick }) => {
	return (
		<button onClick={onClick} disabled={disabled}>
			{monthsOfTheYear[month].substring(0, 3)} {day}
		</button>
	);
};

export default DayButton;
