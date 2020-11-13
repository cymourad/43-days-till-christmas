/**
 * This component displays three pickers:
 * - book names
 * - chapter (should dunamically change based on book)
 * - number (should dynamically change based on book and chapter)
 *
 * TODO add ability to request hints --> lock book, then lock chapter, then lock verse
 */

import React, { useState } from "react";

import Select from "react-select";
import catenaBookNames, { chaptersPerBook } from "../resources/catenaBookNames";

const BibleRefPicker = ({ correctBook, correctChapter, correctNumber }) => {
	const [chosenBook, setChosenBook] = useState(null); // start with the user not choosing any book in the Bible
	const [chosenChapter, setChosenChapter] = useState(0); // start with the user not choosing any chapter in any book in the Bible
	const [chosenNumber, setChosenNumber] = useState(0); // start with the user not choosing and nymber in any chapter in any book in the Bible

	const [bookHintGiven, setBookHintGiven] = useState(false); // start without giving a hint about the book
	const [chapterHintGiven, setChapterHintGiven] = useState(false); // start without giving a hint about the chapter

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

	return (
		<div>
			<Select
				placeholder="Please pick a book"
				onChange={(e) => setChosenBook(e.value)}
				options={bookOptions}
			/>
			<Select
				placeholder="Please pick a chapter"
				onChange={(e) => setChosenChapter(e.value)}
				options={
					chosenBook
						? chapterOptions.slice(0, chaptersPerBook[chosenBook])
						: chapterOptions
				}
			/>
			<Select
				placeholder="Please pick a number"
				onChange={(e) => setChosenNumber(e.value)}
				options={numberOptions}
			/>
			{!bookHintGiven && (
				<button
					onClick={() => {
						setBookHintGiven(true);
						setChosenBook(correctBook);
						// TODO slice the bookOptions to be only the correct book
					}}
				>
					I need a hint!
				</button>
			)}
			{bookHintGiven && !chapterHintGiven && (
				<button>I need a second hint</button>
			)}
		</div>
	);
};

export default BibleRefPicker;
