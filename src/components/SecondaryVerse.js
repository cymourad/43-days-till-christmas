/**
 * This is the verse that explains the theotokia.
 * It gets revealed once the user finds the correct reference.
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