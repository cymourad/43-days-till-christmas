/**
 * This component displays the text of the main verse.
 */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import theotokos from "../static/theotokos_kiro_1.jpg";
import annunciation from "../static/annunciation_kiro_1.jpg";
import platytera from "../static/platytera_kiro_1.jpg";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: "auto",
		marginTop: 20,
	},
	media: {
		height: 600,
	},
});

const MainVerse = ({ text, isTheotokia }) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={theotokos} />
				<CardContent>
					<Typography variant="body1" color="textSecondary" component="p">
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{isTheotokia ? (
					<Button
						size="small"
						color="primary"
						onClick={(e) => {
							e.preventDefault();
							window.open("https://tasbeha.org/hymn_library/cat/214");
						}}
					>
						Open Psalmody
					</Button>
				) : (
					<Button
						size="small"
						color="primary"
						onClick={(e) => {
							e.preventDefault();
							window.open(
								"https://www.biblegateway.com/versions/New-King-James-Version-NKJV-Bible/#booklist"
							);
						}}
					>
						Open Scripture
					</Button>
				)}
			</CardActions>
		</Card>
	);
	return (
		<div>
			<p>{text}</p>
		</div>
	);
};

export default MainVerse;
