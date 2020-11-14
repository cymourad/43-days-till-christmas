/**
 * This compoenent shows the user a verse from the theotokia, and asks them to find the day and the part #.
 * Then, it asks them to find its source in the Bible and displays the verse when done.
 */

import React, { useState } from "react";

import theotokia from "../resources/theotokia";

import MainVerse from "./MainVerse";
import TheotokiaRefPicker from "./TheotokiaRefPicker";
import BibleRefPicker from "./BibleRefPicker";
import SecondaryVerse from "./SecondaryVerse";

const TheotokiaGame = ({ day, month }) => {
	const infoAll = theotokia.filter(function (game) {
		return game.month == month && game.day == day;
	}); // find the values of today's game

	// if an error occurs in finding today's game, fall back on the game of the first day (should never happen)
	const info = infoAll.length > 0 ? infoAll[0] : theotokia[0];

	const [foundTheTheotokia, setFoundTheTheotokia] = useState(false); // start by not showing the Biblical verse

	return (
		<div>
			<MainVerse
				text={info.theotokiaVerse}
				isTheotokia
				theotokiaDay={info.theotokiaDay}
				theotokiaPart={info.theotokiaPart}
			/>
			<TheotokiaRefPicker
				correctDay={info.theotokiaDay}
				correctPart={info.theotokiaPart}
				setGotCorrectAnswer={setFoundTheTheotokia}
			/>
			{foundTheTheotokia && (
				<>
					<SecondaryVerse
						text={info.verseBody}
						link={info.link}
						book={info.verseBook}
						chapter={info.verseChapter}
					/>
					<BibleRefPicker
						correctBook={info.verseBook}
						correctChapter={info.verseChapter}
						correctNumber={info.verseNumber}
					/>
				</>
			)}
		</div>
	);
};

export default TheotokiaGame;
