/**
 * This simple button switches between the Theotkia mode and the Bible verse mode.
 */

import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RadioButtonsGroup = ({ isTheotokia, setIsTheotokia }) => {
	const handleChange = (event) => {
		console.log(event);
		setIsTheotokia(event.target.value == "true");
	};

	return (
		<FormControl component="fieldset">
			<RadioGroup
				aria-label="game-type"
				name="game type"
				value={isTheotokia}
				onChange={handleChange}
				row
			>
				<FormControlLabel
					value={false}
					control={<Radio />}
					label="Explore Scripture"
					labelPlacement="end"
				/>
				<FormControlLabel
					value={true}
					control={<Radio />}
					label="Explore Theotokia"
					labelPlacement="end"
				/>
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;
