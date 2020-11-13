/**
 * This is the verse that explains the theotokia.
 * It gets revealed once the user finds the correct reference.
 */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import catenaBookNames from "../resources/catenaBookNames";

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		margin: "auto",
		marginTop: 20,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const SecondaryVerse = ({ text }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					Let's find out more in Scripture ...
				</Typography>
				<Typography variant="h5" component="h2">
					{text}
				</Typography>
				<br />
				<Typography variant="body2" component="p">
					Can you locate this verse in Scripture?
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					onClick={(e) => {
						e.preventDefault();
						window.open(
							"https://www.biblegateway.com/versions/New-King-James-Version-NKJV-Bible/#booklist"
						);
					}}
					size="small"
					color="primary"
				>
					Open Scripture
				</Button>
			</CardActions>
		</Card>
	);
};

// const SecondaryVerse = ({ text, book, chapter, number }) => {
// 	return (
// 		<div>
// 			<p>{text}</p>
// 			<p>
// 				({catenaBookNames[book]} {chapter}:{number})
// 			</p>
// 		</div>
// 	);
// };

export default SecondaryVerse;
