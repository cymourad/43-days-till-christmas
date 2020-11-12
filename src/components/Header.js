/**
 * This compoenent stay at the top of the page, it displays the day count till Christmas and
 * a verse about the Nativity.
 */

import React from "react";

import { getDaysTillUpcomingChristmas } from "../helpers/dateHelper";

const Header = () => {
	return (
		<div>
			<p>{getDaysTillUpcomingChristmas()} days till Christmas</p>
			<p>"Christ is Born, Glorify Him"</p>
		</div>
	);
};

export default Header;
