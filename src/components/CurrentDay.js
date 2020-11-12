/**
 * This component displays the current selected day.
 *
 * TODO add the coptic date
 */

import React from "react";

import monthsOfTheYear from "../resources/monthsOfTheYear";

const CurrentDay = ({ month, day }) => {
	return (
		<div>
			<p>
				{monthsOfTheYear[month]} {day}
			</p>
		</div>
	);
};

export default CurrentDay;
