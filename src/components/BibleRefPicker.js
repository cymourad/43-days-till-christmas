/**
 * This component displays three pickers:
 * - book names
 * - chapter (should dunamically change based on book)
 * - number (should dynamically change based on book and chapter)
 *
 * TODO add ability to request hints --> lock book, then lock chapter, then lock verse
 */

import React from "react";

const BibleRefPicker = ({
	book,
	setBook,
	chapter,
	setChapter,
	number,
	setNumber,
}) => {
	return (
		<div>
			<p> this is a bible ref picker</p>
		</div>
	);
};

export default BibleRefPicker;
