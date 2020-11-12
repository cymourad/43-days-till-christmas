/**
 * This simple button switches between the Theotkia mode and the Bible verse mode.
 */

import React from "react";

const VerseTypeButton = ({ isTheotokia, setIsTheotokia }) => {
	return (
		<button onClick={() => setIsTheotokia(!isTheotokia)}>
			Change to {isTheotokia ? "Bible Prophecies and Praises" : "Theotokia"}
		</button>
	);
};

export default VerseTypeButton;
