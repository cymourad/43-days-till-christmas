/**
 * This compoenent shows the user a verse from the theotokia, and asks them to find the day and the part #.
 * Then, it asks them to find its source in the Bible and displays the verse when done.
 */

import React from "react";

import theotokia from "../resources/theotokia";

import MainVerse from "./MainVerse";
import TheotokiaPicker from "./TheotokiaRefPicker";
import BibleRefPicker from "./BibleRefPicker";
import SecondaryVerse from "./SecondaryVerse";

const TheotokiaGame = ({ day, month }) => {
	const info = theotokia[0]; // TODO change this to find the theotokia based on day and month

	return <MainVerse text={info.theotokiaVerse} />;
};

export default TheotokiaGame;
