/**
 * This compoenent diaplys the body if a verse and the user must find its reference.
 */

import React from "react";

import verses from "../resources/verses";

import MainVerse from "./MainVerse";
import BibleRefPicker from "./BibleRefPicker";

const VerseGame = ({ day, month }) => {
	const infoAll = verses.filter(function (verse) {
		return verse.month == month && verse.day == day;
	}); // find the values of today's game

	// if an error occurs in finding today's game, fall back on the game of the first day (should never happen)
	const info = infoAll.length > 0 ? infoAll[0] : verses[0];
	return (
		<div>
			<MainVerse text={info.body} />
			<BibleRefPicker />
		</div>
	);
};

export default VerseGame;
