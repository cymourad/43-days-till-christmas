/**
 * This file contains a dictionary that defines the images as an array of object.
 * Each object has:
 * - source: the image itself
 * - title: the name of the image
 * - artist: name of the iconnagrapher
 * - url: url where I got the picture from
 * - width: width of image in pixels
 * - height: height of image in pixels
 */

import theotokos_kiro from "./theotokos_kiro_1.jpg";
import annunciation from "./annunciation_kiro_1.jpg";
import platytera from "./platytera_kiro_1.jpg";
import theotokos_makary_1 from "./theotokos_makary_1.jpg";
import theotokos_makary_2 from "./theotokos_makary_2.jpg";
import theotokos_makary_3 from "./theotokos_makary_3.jpg";
import burial from "./burial_makary_1.jpg";

const KIRO = {
	NAME: "Kirollos Kilada",
	URL: "https://www.kkilada.com/coptic-icons",
};

const MAKARY = {
	NAME: "George Makary",
	URL: "https://www.copticicon.com/icons",
};

const images = [
	{
		source: theotokos_kiro,
		title: "Theotokos",
		artist: KIRO.NAME,
		url: KIRO.URL,
		width: 1525,
		height: 2290,
	},
	{
		source: annunciation,
		title: "Annunciation",
		artist: KIRO.NAME,
		url: KIRO.URL,
		width: 2500,
		height: 3352,
	},
	{
		source: platytera,
		title: "Platytera",
		artist: KIRO.NAME,
		url: KIRO.URL,
		width: 2500,
		height: 3342,
	},
	{
		source: theotokos_makary_1,
		title: "Theotokos",
		artist: MAKARY.NAME,
		url: MAKARY.URL,
		width: 750,
		height: 1907,
	},
	{
		source: theotokos_makary_2,
		title: "Theotokos",
		artist: MAKARY.NAME,
		url: MAKARY.URL,
		width: 750,
		height: 942,
	},
	{
		source: theotokos_makary_3,
		title: "Theotokos",
		artist: MAKARY.NAME,
		url: MAKARY.URL,
		width: 750,
		height: 999,
	},
	{
		source: burial,
		title: "Burial",
		artist: MAKARY.NAME,
		url: MAKARY.URL,
		width: 750,
		height: 998,
	},
];

export default images;
