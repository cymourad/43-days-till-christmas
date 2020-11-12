/**
 * This compoenent stay at the top of the page, it displays the day count till Christmas and
 * a verse about the Nativity.
 */

import React from "react";

const Header = () => {
	const today = new Date();
	const todayYear = today.getFullYear(); // returns number --> yyyy
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	const christmasMonth = 0; // january
	const christmasDay = 7;

	// calculate the upcoming year for Christmas
	// if we are between jan 1 and jan 7, it's this year,
	// else, it is next year
	const christmasYear =
		todayMonth == christmasMonth && todayDay <= christmasDay
			? todayYear
			: todayYear + 1;

	const christmasDate = new Date(christmasYear, christmasMonth, christmasDay);

	// get number of days till christmas
	const diffTime = Math.abs(christmasDate - today);
	const daysTillChristmas = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return (
		<div>
			<p>{daysTillChristmas} days till Christmas</p>
			<p>"Christ is Born, Glorify Him"</p>
		</div>
	);
};

export default Header;
