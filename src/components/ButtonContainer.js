/**
 * This container has all the buttons of the 43 days.
 */

import React from "react";

import DayButton from "./DayButton";

import theotokia from "../resources/theotokia";

const ButtonCotainer = ({ setCurDay, setCurMonth }) => {
	const today = new Date();
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	const setCurDate = (month, day) => {
		setCurMonth(month);
		setCurDay(day);
	};

	// only allow buttons between the last Nov 25 and the upcoming christmas

	return (
		<div>
			{theotokia.map((info) => (
				<DayButton
					key={`btn-${info.month}-${info.day}`}
					month={info.month}
					day={info.day}
					onClick={() => setCurDate(info.month, info.day)}
					enabled
				/>
			))}
		</div>
	);
};

export default ButtonCotainer;
