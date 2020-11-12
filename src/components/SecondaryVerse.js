/**
 * This is the verse that explains the theotokia.
 * It gets revealed once the user finds the correct reference.
 */

import React from "react";

import catenaBookNames from "../resources/catenaBookNames";

const SecondaryVerse = ({ text, book, chapter, number }) => {
	return (
		<div>
			<p>{text}</p>
			<p>
				({catenaBookNames[book]} {chapter}:{number})
			</p>
		</div>
	);
};

export default SecondaryVerse;
