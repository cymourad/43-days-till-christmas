/**
 * This compoenent diaplys the body if a verse and the user must find its reference.
 */

import React from "react";

import verses from "../resources/verses";

import MainVerse from "./MainVerse";
import BibleRefPicker from "./BibleRefPicker";

const VerseGame = ({ day, month }) => {
	const info = verses[0]; // TODO find this based on day and month
	return (
		<div>
			<MainVerse text={info.body} />
			<BibleRefPicker />
		</div>
	);
};

export default VerseGame;
