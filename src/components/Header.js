/**
 * This compoenent stay at the top of the page, it displays the day count till Christmas and
 * a verse about the Nativity.
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { getDaysTillUpcomingChristmas } from "../helpers/dateHelper";

const Header = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
	}));

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					{getDaysTillUpcomingChristmas()} days till Christmas
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
