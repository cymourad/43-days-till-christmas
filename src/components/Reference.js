/**
 * This component displays the book, chapter, and number of the verse.
 * On click, the user is taken to Catena.
 */

import React from "react";

const Reference = ({ book, chapter, number }) => {
	return (
		<div>
			<p>
				{book} {chapter}:{number}
			</p>
		</div>
	);
};

export default Reference;
