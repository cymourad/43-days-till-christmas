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
	const info = theotokia[0]; // TODO change this to find the theotokia based on day and month

	const [chosenBook, setChosenBook] = useState(null); // start with the user not choosing any book in the Bible
	const [chosenChapter, setChosenChapter] = useState(0); // start with the user not choosing any chapter in any book in the Bible
	const [chosenNumber, setChosenNumber] = useState(0); // start with the user not choosing and nymber in any chapter in any book in the Bible

	return (
		<div>
			<MainVerse text={info.theotokiaVerse} />
			<TheotokiaRefPicker
				correctDay={info.theotokiaDay}
				correctPart={info.theotokiaPart}
			/>
			<p>Now, try to find this in a verse in the Bible</p>
			<BibleRefPicker
				book={chosenBook}
				setBook={setChosenBook}
				chapter={chosenChapter}
				setChapter={setChosenChapter}
				number={chosenNumber}
				setNumber={setChosenNumber}
			/>
		</div>
	);
};

export default TheotokiaGame;
