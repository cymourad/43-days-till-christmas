/**
 * This component lets the user choose a day of the week and a part number for the theotokia.
 * The part number should change dynamically with the day of the week.
 */

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

// partsPerTheotokia[dayOFWeek {0-6}] = numberOfPartsInThisTheotokia
import { partsPerTheotokia } from "../resources/theotokia";
import daysOfTheWeek from "../resources/daysOfTheWeek";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	helpButton: {
		margin: 10,
	},
}));

const TheotokiaRefPicker = ({
	correctDay,
	correctPart,
	setGotCorrectAnswer,
}) => {
	const classes = useStyles();

	const [chosenDay, setChosenDay] = useState(null); // start with the user not choosing any day
	const [chosenPart, setChosenPart] = useState(null); // start with the user not choosing any part

	const [requestedHint, setRequestedHint] = useState(false); // start with the user not needing a hint

	let dayOptions = [];
	for (const dayOfWeek in daysOfTheWeek) {
		dayOptions.push({ value: dayOfWeek, label: daysOfTheWeek[dayOfWeek] });
	}

	const partsOptions = Array.from({ length: 18 }, (_, i) => i + 1).map((n) => ({
		value: n,
		label: n,
	}));

	const isCorrectAnswer = chosenDay == correctDay && chosenPart == correctPart;
	setGotCorrectAnswer(isCorrectAnswer);

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="day-select-label">Day</InputLabel>
				<Select
					labelId="day-select-label"
					id="day-select"
					value={chosenDay}
					onChange={(e) => setChosenDay(e.target.value)}
					disabled={isCorrectAnswer}
				>
					{dayOptions
						.slice(
							requestedHint ? correctDay : 0,
							requestedHint ? correctDay + 1 : 7
						)
						.map((dayOption) => (
							<MenuItem value={dayOption.value}>{dayOption.label}</MenuItem>
						))}
				</Select>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel id="part-select-label">Part</InputLabel>
				<Select
					labelId="part-select-label"
					id="part-select"
					value={chosenPart}
					onChange={(e) => setChosenPart(e.target.value)}
					disabled={isCorrectAnswer}
				>
					{partsOptions
						.slice(0, chosenDay ? partsPerTheotokia[chosenDay] : 18)
						.map((part) => (
							<MenuItem value={part.value}>{part.label}</MenuItem>
						))}
				</Select>
			</FormControl>
			<br />
			{!isCorrectAnswer && !requestedHint && (
				<Button
					variant="contained"
					onClick={() => {
						setRequestedHint(true);
						setChosenDay(correctDay);
					}}
					className={classes.helpButton}
				>
					I need help
				</Button>
			)}
		</div>
	);
	// return (
	// 	<div>
	// 		<p>Can you find this verse in the Psalmody?</p>

	// 		<div style={{ width: "40%" }}>
	// 			<Select
	// 				placeholder="Pick a Day"
	// 				onChange={(e) => {
	// 					setChosenDay(e.value);
	// 				}}
	// 				options={
	// 					requestedHint
	// 						? dayOptions.slice(correctDay, correctDay + 1)
	// 						: dayOptions
	// 				}
	// 				isDisabled={isCorrectAnswer}
	// 			/>
	// 		</div>
	// 		<div style={{ width: "40%" }}>
	// 			<Select
	// 				placeholder="Pick a Part"
	// 				defaultValue={chosenPart}
	// 				onChange={(e) => setChosenPart(e.value)}
	// 				options={
	// 					chosenDay
	// 						? partsOptions.slice(0, partsPerTheotokia[chosenDay])
	// 						: partsOptions
	// 				}
	// 				isDisabled={isCorrectAnswer}
	// 			/>
	// 		</div>
	// 		{!isCorrectAnswer && (
	// 			<button
	// 				disabled={requestedHint}
	// 				onClick={() => {
	// 					setRequestedHint(true);
	// 				}}
	// 			>
	// 				{requestedHint
	// 					? `It's ${daysOfTheWeek[correctDay]}`
	// 					: "I need a hint!"}
	// 			</button>
	// 		)}
	// 	</div>
	// );
};

export default TheotokiaRefPicker;
