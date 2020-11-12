/**
 * This component lets the user choose a day of the week and a part number for the theotokia.
 * The part number should change dynamically with the day of the week.
 */

import React, { useState } from "react";

// partsPerTheotokia[dayOFWeek {0-6}] = numberOfPartsInThisTheotokia
import { partsPerTheotokia } from "../resources/theotokia";
import daysOfTheWeek from "../resources/daysOfTheWeek";

import Select from "react-select";

const TheotokiaRefPicker = ({ correctDay, correctPart }) => {
	console.log("correct day", correctDay);
	const [chosenDay, setChosenDay] = useState(null); // start with the user not choosing any day
	const [chosenPart, setChosenPart] = useState(0); // start with the user not choosing any part

	const [requestedHint, setRequestedHint] = useState(false); // start with the user not needing a hint

	const dayOptions = [
		{ value: 0, label: "Sunday" },
		{ value: 1, label: "Monday" },
		{ value: 2, label: "Tuesday" },
		{ value: 3, label: "Wednesday" },
		{ value: 4, label: "Thursday" },
		{ value: 5, label: "Friday" },
		{ value: 6, label: "Saturday" },
	];

	const partsOptions = Array.from({ length: 18 }, (_, i) => i + 1).map((n) => ({
		value: n,
		label: n,
	}));

	const isCorrectAnswer = chosenDay == correctDay && chosenPart == correctPart;

	return (
		<div>
			<p>Can you find this verse in the Psalmody?</p>
			<button
				type="button"
				onClick={(e) => {
					e.preventDefault();
					window.open("https://tasbeha.org/hymn_library/cat/214");
				}}
			>
				You can find the Theotokia in the Psalmody
			</button>
			<div style={{ width: "40%" }}>
				<Select
					placeholder="Pick a Day"
					onChange={(e) => setChosenDay(e.value)}
					options={dayOptions}
					isDisabled={isCorrectAnswer}
				/>
			</div>
			<div style={{ width: "40%" }}>
				<Select
					placeholder="Pick a Part"
					defaultValue={chosenPart}
					onChange={(e) => setChosenPart(e.value)}
					options={
						chosenDay
							? partsOptions.slice(0, partsPerTheotokia[chosenDay])
							: partsOptions
					}
					isDisabled={isCorrectAnswer}
				/>
			</div>
			{!isCorrectAnswer && (
				<button
					disabled={requestedHint}
					onClick={() => {
						setRequestedHint(true);
						setChosenDay(correctDay);
					}}
				>
					{requestedHint
						? `It's ${daysOfTheWeek[correctDay]}`
						: "I need a hint!"}
				</button>
			)}
		</div>
	);
};

export default TheotokiaRefPicker;
