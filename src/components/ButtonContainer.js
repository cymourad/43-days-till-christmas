/**
 * This container has all the buttons of the 43 days.
 */

import React from "react";

import DayButton from "./DayButton";

import theotokia from "../resources/theotokia";
import { monthNumber } from "../resources/monthsOfTheYear";

const ButtonCotainer = ({ curDay, curMonth, setCurDay, setCurMonth }) => {
	const today = new Date();
	const todayYear = today.getFullYear(); // returns number --> yyyy
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	const christmasMonth = monthNumber.January;
	const christmasDay = 7;

	const startOfAdventMonth = monthNumber.November;
	const startOfAdventDay = 25;

	// calculate the upcoming year for Christmas
	// if we are between jan 1 and jan 7, it's this year,
	// else, it is next year
	const christmasYear =
		todayMonth == christmasMonth && todayDay <= christmasDay
			? todayYear
			: todayYear + 1;

	const christmasDate = new Date(christmasYear, christmasMonth, christmasDay);

	// calculate the previous start of advent day
	// if today is from jan 1 to 7, start of advent is in the previous year
	// else, start of advent is in the current year
	const startOfAdventYear =
		todayMonth == christmasMonth && todayDay <= christmasDay
			? todayYear - 1
			: todayYear;

	const startOfAdventDate = new Date(
		startOfAdventYear,
		startOfAdventMonth,
		startOfAdventDay
	);

	const setCurDate = (month, day) => {
		setCurMonth(month);
		setCurDay(day);
	};

	// only allow buttons between the last Nov 25 and the upcoming christmas
	// TODO make sure this logic works
	const isDisabled = (month, day) => {
		return false;
		const isInCurAdvent = today >= startOfAdventDate && today <= christmasDate;

		if (!isInCurAdvent) return true; // disable all buttons if we are not in advent

		let proposedDateYear = null;
		//
		if (todayYear == startOfAdventYear) {
			if (month == christmasMonth) {
				proposedDateYear = todayYear + 1;
			} else {
				proposedDateYear = todayYear;
			}
		} else {
			if (month == christmasMonth) {
				proposedDateYear = todayYear;
			} else {
				proposedDateYear = todayYear - 1;
			}
		}

		const proposedDate = new Date(proposedDateYear, month, day);

		const proposedDateDidNotComeYet = proposedDate > today;

		return proposedDateDidNotComeYet;
	};
	return (
		<div>
			{theotokia.map((info) => (
				<DayButton
					key={`btn-${info.month}-${info.day}`}
					month={info.month}
					day={info.day}
					onClick={() => setCurDate(info.month, info.day)}
					disabled={isDisabled(info.month, info.day)}
					primary={info.month == curMonth && info.day == curDay}
				/>
			))}
		</div>
	);
};

export default ButtonCotainer;
