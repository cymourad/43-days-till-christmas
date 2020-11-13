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

	const [showBiblicalVerse, setShowBiblicalVerse] = useState(false); // start by not showing the Biblical verse

	return (
		<div>
			<MainVerse text={info.theotokiaVerse} isTheotokia />
			<TheotokiaRefPicker
				correctDay={info.theotokiaDay}
				correctPart={info.theotokiaPart}
			/>
			<p>Now, try to find this in a verse in the Bible</p>
			{showBiblicalVerse ? (
				<MainVerse text={info.verseBody} />
			) : (
				<button onClick={() => setShowBiblicalVerse(true)}>
					I am puzzled, can you please show me the verse?
				</button>
			)}
			<BibleRefPicker
				correctBook={info.verseBook}
				correctChapter={info.verseChapter}
				correctNumber={info.verseNumber}
			/>
		</div>
	);
};

export default TheotokiaGame;
