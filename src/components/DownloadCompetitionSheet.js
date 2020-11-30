/**
 * This component displays a button that lets the user download the appropriate competition
 * sheet depending on which mode they are in.
 */

import React from "react";

import Button from "@material-ui/core/Button";

import adventBibleCompetitionPDF from "../static/advent_competition.pdf";
import adventTheotokiaCompetitionPDF from "../static/advent_competition_theotokia.pdf";

import adventBibleCompetitionDOCX from "../static/advent_competition.docx";
import adventTheotokiaCompetitionDOCX from "../static/advent_competition_theotokia.docx";

const DonwloadCompetitionSheet = ({ isTheotokia }) => {
	return (
		<div>
			<Button
				style={{ paddingTop: 15 }}
				color="secondary"
				href={
					isTheotokia
						? adventTheotokiaCompetitionPDF
						: adventBibleCompetitionPDF
				}
				download={
					isTheotokia
						? "advent_theotokia_competition.pdf"
						: "advent_bible_competition.pdf"
				}
			>
				Download Competition Sheet (PDF)
			</Button>
			<Button
				style={{ paddingTop: 15 }}
				color="secondary"
				href={
					isTheotokia
						? adventTheotokiaCompetitionDOCX
						: adventBibleCompetitionDOCX
				}
				download={
					isTheotokia
						? "advent_theotokia_competition.docx"
						: "advent_bible_competition.docx"
				}
			>
				Download Competition Sheet (DOCX)
			</Button>
		</div>
	);
};

export default DonwloadCompetitionSheet;
