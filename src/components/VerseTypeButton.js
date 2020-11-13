/**
 * This simple button switches between the Theotkia mode and the Bible verse mode.
 */

import React from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const VerseTypeButton = ({ isTheotokia, setIsTheotokia }) => {
	return (
		<Typography component="div">
			<Grid
				component="label"
				container
				alignItems="center"
				spacing={1}
				justify="center"
			>
				<Grid item>Explore Scripture</Grid>
				<Grid item>
					<Switch
						checked={isTheotokia}
						onChange={(e) => setIsTheotokia(e.target.checked)}
					/>
				</Grid>
				<Grid item>Explore the Thetokia</Grid>
			</Grid>
		</Typography>

		// <Switch
		// 	checked={isTheotokia}
		// 	onChange={(e) => setIsTheotokia(e.target.checked)}
		// 	label="Explore the Thetokia"
		// />
	);

	return (
		<button onClick={() => setIsTheotokia(!isTheotokia)}>
			Change to {isTheotokia ? "Bible Prophecies and Praises" : "Theotokia"}
		</button>
	);
};

export default VerseTypeButton;
