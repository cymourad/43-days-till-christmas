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

import images from "../static/images";

const MAX_WIDTH = 350; //pixels

const useStyles = makeStyles({
	root: {
		maxWidth: MAX_WIDTH,
		margin: "auto",
		marginTop: 20,
	},
	media: {
		height: 600,
	},
});

const MainVerse = ({ text, isTheotokia }) => {
	const classes = useStyles();
	const image = images[Math.floor(Math.random() * images.length)];
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					style={{ height: (MAX_WIDTH * image.height) / image.width }}
					image={image.source}
					title={image.title}
				/>
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
				<Button
					size="small"
					color="primary"
					onClick={(e) => {
						e.preventDefault();
						window.open(image.url);
					}}
				>
					Explore Iconographer
				</Button>
			</CardActions>
		</Card>
	);
};

export default MainVerse;
