/**
 * This component displays an accordion that explains splits up the different
 * parts of the poem of 1 Timothy 3:16 and explains each of these verses in more depth.
 *
 * This accordion will orginially be a button asking the user if they want to know my favorite
 * Christmas song. If the use clicks on the button, it will turn into the accordion where
 * they can explore the verse in more depth.
 */

import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const versesOfMysteryOfGodliness = [
	{ verse: "God was manifested in the flesh,", explanation: "explanation 1" },
	{ verse: "Justified in the Spirit,", explanation: "explanation 2" },
	{ verse: "Seen by angels,", explanation: "explanation 3" },
	{ verse: "Preached among the Gentiles,", explanation: "explanation 4" },
	{ verse: "Believed on in the world,", explanation: "explanation 5" },
	{
		verse: "Received up in glory.",
		explanation: "Christ's glorious ascension into heaven",
	},
];

const GreatIsTheMysteryOfGodliness = ({ showAccordion, setShowAccordion }) => {
	const classes = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
	}));

	if (showAccordion)
		return (
			<>
				<Typography variant="body1" color="inherit">
					And without controversy great is the mystery of godliness:
				</Typography>

				{versesOfMysteryOfGodliness.map((part, i) => (
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`verse-${i}-control`}
							id={`verse-${i}-header`}
						>
							<Typography className={classes.heading}>{part.verse}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="caption">{part.explanation}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
				<Typography variant="body1" color="inherit">
					(1 Timothy 3:16)
				</Typography>
			</>
		);

	return (
		<Button
			variant="contained"
			color="primary"
			onClick={() => setShowAccordion(true)}
		>
			Check out my fav Christmas verse
		</Button>
	);
};

export default GreatIsTheMysteryOfGodliness;
