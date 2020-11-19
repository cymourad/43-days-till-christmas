/**
 * This is the footer that displays at the bottom of every page.
 *
 * TODO add a verse, an icon, etc.
 */

import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import sgsaLogo from "../static/sgsa_logo.png";

const Footer = () => {
	return (
		<AppBar position="static" style={{ alignItems: "center" }}>
			<Toolbar>
				<Typography variant="body1" color="inherit">
					Made with ❤️ from
				</Typography>
				<Avatar
					alt="SGSA Logo"
					src={sgsaLogo}
					style={{ paddingLeft: 5 }}
					onClick={(e) => {
						e.preventDefault();
						window.open("https://sgsa.ca/");
					}}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
