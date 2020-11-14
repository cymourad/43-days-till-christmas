/**
 * This component displays three pickers:
 * - book names
 * - chapter (should dunamically change based on book)
 * - number (should dynamically change based on book and chapter)
 *
 * TODO add ability to request hints --> lock book, then lock chapter, then lock verse
 */

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

// import Select from "react-select";
import catenaBookNames, { chaptersPerBook } from "../resources/catenaBookNames";

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

const BibleRefPicker = ({ correctBook, correctChapter, correctNumber }) => {
	const classes = useStyles();

	const [chosenBook, setChosenBook] = useState(null); // start with the user not choosing any book in the Bible
	const [chosenChapter, setChosenChapter] = useState(null); // start with the user not choosing any chapter in any book in the Bible
	const [chosenNumber, setChosenNumber] = useState(null); // start with the user not choosing and nymber in any chapter in any book in the Bible

	const [bookAndChapterHintGiven, setBookAndChapterHintGiven] = useState(false); // start without giving a hint about the book and chapter
	const [numberHintGiven, setNumberHintGiven] = useState(false); // start without reducing the number of chapters

	let bookOptions = [];
	for (const book in catenaBookNames) {
		bookOptions.push({ value: book, label: catenaBookNames[book] });
	}

	// longest book in the Bible is Psalms with 150 chapters
	const chapterOptions = Array.from({ length: 150 }, (_, i) => i + 1).map(
		(n) => ({
			value: n,
			label: n,
		})
	);

	// longest chapter in the Bible is Psalms 119 with 176 verses
	const numberOptions = Array.from({ length: 176 }, (_, i) => i + 1).map(
		(n) => ({
			value: n,
			label: n,
		})
	);

	const isCorrectBook = chosenBook === correctBook;

	const isCorrectChapter = chosenChapter === correctChapter;

	const isCorrectNmber = chosenNumber === correctNumber;

	const isCorrectAnswer =
		chosenBook === correctBook &&
		chosenChapter === correctChapter &&
		chosenNumber === correctNumber;

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="book-select-label">Book</InputLabel>
				<Select
					labelId="book-select-label"
					id="book-select"
					value={chosenBook}
					onChange={(e) => setChosenBook(e.target.value)}
					disabled={isCorrectBook}
				>
					{bookAndChapterHintGiven ? (
						<MenuItem value={correctBook}>
							{catenaBookNames[correctBook]}
						</MenuItem>
					) : (
						bookOptions.map((book) => (
							<MenuItem value={book.value}>{book.label}</MenuItem>
						))
					)}
				</Select>
				{bookAndChapterHintGiven && (
					<FormHelperText>Hint: Open Scripture above</FormHelperText>
				)}
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="chapter-select-label">Chapter</InputLabel>
				<Select
					labelId="chapter-select-label"
					id="chapter-select"
					value={chosenChapter}
					onChange={(e) => setChosenChapter(e.target.value)}
					disabled={isCorrectChapter}
				>
					{bookAndChapterHintGiven ? (
						<MenuItem value={correctChapter}>{correctChapter}</MenuItem>
					) : (
						chapterOptions
							.slice(0, chosenBook ? chaptersPerBook[chosenBook] : 151)
							.map((chapter) => (
								<MenuItem value={chapter.value}>{chapter.label}</MenuItem>
							))
					)}
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="number-select-label">Number</InputLabel>
				<Select
					labelId="number-select-label"
					id="number-select"
					value={chosenNumber}
					onChange={(e) => setChosenNumber(e.target.value)}
					disabled={isCorrectNmber}
				>
					{numberOptions
						.slice(
							numberHintGiven
								? correctNumber - 5 >= 0
									? correctNumber - 5
									: 0
								: 0,
							numberHintGiven ? correctNumber + 5 : 176
						)
						.map((number) => (
							<MenuItem value={number.value}>{number.label}</MenuItem>
						))}
				</Select>
				{numberHintGiven && (
					<FormHelperText>
						Hint: There are less verses to choose form
					</FormHelperText>
				)}
			</FormControl>

			<br />

			{isCorrectAnswer ? (
				<>
					<p>Good Job!!</p>
					<Button
						className={classes.helpButton}
						variant="contained"
						color="primary"
						onClick={(e) => {
							e.preventDefault();
							window.open(
								`https://catenabible.com/${correctBook}/${correctChapter}/${correctNumber}`
							);
						}}
					>
						Explore this verse futher
					</Button>
				</>
			) : !bookAndChapterHintGiven ? (
				<Button
					className={classes.helpButton}
					variant="contained"
					color="grey"
					onClick={() => {
						setBookAndChapterHintGiven(true);
					}}
				>
					I do not know where to start 🤔
				</Button>
			) : !numberHintGiven ? (
				<Button
					className={classes.helpButton}
					variant="contained"
					color="grey"
					onClick={() => {
						setNumberHintGiven(true);
					}}
				>
					There are too many verses to choose from!
				</Button>
			) : null}
		</div>
	);
};

export default BibleRefPicker;
