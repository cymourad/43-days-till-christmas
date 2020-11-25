/**
 * This compoenent diaplys the body if a verse and the user must find its reference.
 */

import React from "react";

import verses from "../resources/verses";

import MainVerse from "./MainVerse";
import BibleRefPicker from "./BibleRefPicker";

import Button from "@material-ui/core/Button";
// import adventCompetition from "../static/advent_competition.pdf";

const VerseGame = ({ day, month }) => {
	const infoAll = verses.filter(function (verse) {
		return verse.month == month && verse.day == day;
	}); // find the values of today's game

	// if an error occurs in finding today's game, fall back on the game of the first day (should never happen)
	const info = infoAll.length > 0 ? infoAll[0] : verses[0];
	return (
		<div>
			{/* <Button
				style={{ paddingTop: 15 }}
				color="secondary"
				href={adventCompetition}
				download="advent_competition.pdf"
			>
				Download Competition Sheet
			</Button> */}
			<MainVerse
				text={info.body}
				verseBook={info.book}
				verseChapter={info.chapter}
			/>
			<BibleRefPicker
				correctBook={info.book}
				correctChapter={info.chapter}
				correctNumber={info.number}
			/>
		</div>
	);
};

export default VerseGame;
