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

import { dayNumber } from "../resources/daysOfTheWeek";

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

const MainVerse = ({
	text,
	isTheotokia,
	theotokiaDay,
	theotokiaPart,
	verseBook,
	verseChapter,
}) => {
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
							window.open(
								theotokiaDay == dayNumber.Sunday
									? sundayTheotokiaLinksforPart[theotokiaPart]
									: psalmodyLinks[theotokiaDay]
							);
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
								`https://catenabible.com/${verseBook}/${verseChapter}`
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
					Visit Iconographer
				</Button>
			</CardActions>
		</Card>
	);
};

export default MainVerse;

const psalmodyLinks = {
	0: "", // Sunday
	1: "https://tasbeha.org/hymn_library/view/353", // Monday
	2: "https://tasbeha.org/hymn_library/view/467", // Tuesday
	3: "https://tasbeha.org/hymn_library/view/469", // Wednesday
	4: "https://tasbeha.org/hymn_library/view/471", // Thursday
	5: "https://tasbeha.org/hymn_library/view/146", // Friday
	6: "https://tasbeha.org/hymn_library/view/359", // Saturday
};

const sundayTheotokiaLinksforPart = {
	1: "https://tasbeha.org/hymn_library/view/476",
	2: "https://tasbeha.org/hymn_library/view/476",
	3: "https://tasbeha.org/hymn_library/view/476",
	4: "https://tasbeha.org/hymn_library/view/476",
	5: "https://tasbeha.org/hymn_library/view/476",
	6: "https://tasbeha.org/hymn_library/view/476",
	7: "https://tasbeha.org/hymn_library/view/139", // https://tasbeha.org/hymn_library/view/452 // cemoti has its own link
	8: "https://tasbeha.org/hymn_library/view/140",
	9: "https://tasbeha.org/hymn_library/view/140",
	10: "https://tasbeha.org/hymn_library/view/479",
	11: "https://tasbeha.org/hymn_library/view/479",
	12: "https://tasbeha.org/hymn_library/view/479",
	13: "https://tasbeha.org/hymn_library/view/479",
	14: "https://tasbeha.org/hymn_library/view/479",
	15: "https://tasbeha.org/hymn_library/view/479",
	16: "https://tasbeha.org/hymn_library/view/481",
	17: "https://tasbeha.org/hymn_library/view/481",
	18: "https://tasbeha.org/hymn_library/view/481",
};
