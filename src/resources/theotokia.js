/**
 * This file contains the theotokia data.
 */

import { monthNumber } from "./monthsOfTheYear";
import { dayNumber } from "./daysOfTheWeek";

const theotokia = [
	{
		month: monthNumber.November,
		day: 25,
		theotokiaVerse: "He took what is ours",
		theotokiaDay: dayNumber.Friday,
		theotokiaPart: 1,
		verseBody: "verseBody",
		verseBook: "gn",
		verseChapter: 1,
		verseNumber: 1,
	},
	{
		month: monthNumber.November,
		day: 26,
		theotokiaVerse: "and gave us what is His",
		theotokiaDay: dayNumber.Friday,
		theotokiaPart: 1,
		verseBody: "verseBody",
		verseBook: "gn",
		verseChapter: 1,
		verseNumber: 1,
	},
	{
		month: monthNumber.January,
		day: 2,
		theotokiaVerse: "and exalt Him",
		theotokiaDay: dayNumber.Friday,
		theotokiaPart: 1,
		verseBody: "verseBody",
		verseBook: "gn",
		verseChapter: 1,
		verseNumber: 1,
	},
];

export default theotokia;

export const partsPerTheotokia = {
	0: 18, // Sunday
	1: 9, // Monday
	2: 7, // Tuesday
	3: 7, // Wednesday
	4: 9, // Thursday
	5: 7, // Friday
	6: 9, // Saturday
};
