/**
 * This component displays a button that lets the user download the appropriate competition
 * sheet depending on which mode they are in.
 */

import React from "react";

import Button from "@material-ui/core/Button";

import adventBibleCompetitionSheet from "../static/advent_competition.pdf";
import adventTheotokiaCompetitionSheet from "../static/advent_competition_theotokia.pdf";

const DonwloadCompetitionSheet = ({ isTheotokia }) => {
	return (
		<Button
			style={{ paddingTop: 15 }}
			color="secondary"
			href={
				isTheotokia
					? adventTheotokiaCompetitionSheet
					: adventBibleCompetitionSheet
			}
			download={
				isTheotokia
					? "advent_theotokia_competition.pdf"
					: "advent_bible_competition.pdf"
			}
		>
			Download Competition Sheet
		</Button>
	);
};

export default DonwloadCompetitionSheet;
