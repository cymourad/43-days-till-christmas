/**
 * This file contains functions that help with the calculations of the advent and
 * christmas dates.
 */

import { monthNumber } from "../resources/monthsOfTheYear";

const CHRISTMAS_MONTH = monthNumber.January;
const CHRISTMAS_DAY = 7;

const START_OF_ADVENT_MONTH = monthNumber.November;
const START_OF_ADVENT_DAY = 25;

export const getChistmasDate = () => {
	const today = new Date();
	const todayYear = today.getFullYear(); // returns number --> yyyy
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	// calculate the upcoming year for Christmas
	// if we are between jan 1 and jan 7, it's this year,
	// else, it is next year
	const christmasYear =
		todayMonth == CHRISTMAS_MONTH && todayDay <= CHRISTMAS_DAY
			? todayYear
			: todayYear + 1;

	const christmasDate = new Date(christmasYear, CHRISTMAS_MONTH, CHRISTMAS_DAY);

	return christmasDate;
};

export const getStartOfAdventDate = () => {
	const today = new Date();
	const todayYear = today.getFullYear(); // returns number --> yyyy
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	// calculate the previous start of advent day
	// if today is from jan 1 to 7, start of advent is in the previous year
	// else, start of advent is in the current year
	const startOfAdventYear =
		todayMonth == CHRISTMAS_MONTH && todayDay <= CHRISTMAS_DAY
			? todayYear - 1
			: todayYear;

	const startOfAdventDate = new Date(
		startOfAdventYear,
		START_OF_ADVENT_MONTH,
		START_OF_ADVENT_DAY
	);

	return startOfAdventDate;
};

export const isInCurAdvent = (date = new Date()) => {
	return date >= getStartOfAdventDate() && date <= getChistmasDate();
};

export const getDaysTillUpcomingChristmas = () => {
	const today = new Date();

	// get number of days till christmas
	const diffTime = Math.abs(getChistmasDate() - today);
	const daysTillChristmas = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return daysTillChristmas;
};
