/**
 * This component displays a horizontal timeline that goes in the header.
 * If we are in the advent, it dsiplays which week of the advent we are in.
 * If we are outside of the advent, it displays which part of the Church year we are in.
 */

import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import { isInCurAdvent, getChistmasDate } from "../helpers/dateHelper";
import { monthNumber } from "../resources/monthsOfTheYear";

const ChurchTimeline = () => {
	const today = new Date();
	const curYear = today.getFullYear();

	// TODO change the 2020 and 2021 to be dynamic

	const adventEvents = [
		{
			name: "2 weeks of Hathor",
			startDate: new Date(2020, monthNumber.November, 25),
			endDate: new Date(2020, monthNumber.December, 9),
		},
		{
			name: "Annunciation of the Birth of John the Baptist",
			startDate: new Date(2020, monthNumber.December, 13),
			endDate: new Date(2020, monthNumber.December, 19),
		},
		{
			name: "Annunciation of the Birth of Christ",
			startDate: new Date(2020, monthNumber.December, 20),
			endDate: new Date(2020, monthNumber.December, 26),
		},
		{
			name: "St Mary Visits Elizabeth",
			startDate: new Date(2020, monthNumber.December, 27),
			endDate: new Date(2021, monthNumber.January, 2),
		},
		{
			name: "Birth of John the Baptist",
			startDate: new Date(2021, monthNumber.January, 3),
			endDate: new Date(2021, monthNumber.January, 5),
		},
		{
			name: "Paramon",
			startDate: new Date(2021, monthNumber.January, 6),
			endDate: new Date(2021, monthNumber.January, 6),
			// startDate: getChistmasDate().setDate(getChistmasDate().getDate() - 5),
			// endDate: getChistmasDate().setDate(getChistmasDate().getDate() - 5),
		},
		{
			name: "Christmas",
			startDate: getChistmasDate(),
			endDate: getChistmasDate(),
		},
	];
	const churchYearEvents = [
		{
			name: "New Year",
			startDate: new Date(2020, monthNumber.September, 1),
			endDate: new Date(2020, monthNumber.November, 24),
		},
		{
			name: "Nativity",
			startDate: new Date(2020, monthNumber.November, 25),
			endDate: new Date(2021, monthNumber.January, 7),
		},
		{
			name: "Epiphany",
			startDate: new Date(2021, monthNumber.January, 8),
			endDate: new Date(2021, monthNumber.February, 25),
		},
		{
			name: "Lent",
			startDate: new Date(2021, monthNumber.February, 26),
			endDate: new Date(2021, monthNumber.April, 10),
		},
		{
			name: "Passion",
			startDate: new Date(2021, monthNumber.April, 11),
			endDate: new Date(2021, monthNumber.April, 18),
		},
		{
			name: "Resurrection",
			startDate: new Date(2021, monthNumber.April, 19),
			endDate: new Date(2021, monthNumber.May, 27),
		},
		{
			name: "Ascension and Pentecost",
			startDate: new Date(2021, monthNumber.May, 28),
			endDate: new Date(2021, monthNumber.July, 12),
		},
		{
			name: "Work of the Holy Spirit",
			startDate: new Date(2021, monthNumber.July, 13),
			endDate: new Date(2021, monthNumber.August, 31),
		},
	];

	const eventsToUse = isInCurAdvent() ? adventEvents : churchYearEvents;

	return (
		<Timeline align="alternate">
			{eventsToUse.map((event, i) => (
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							color={
								today > event.startDate && today < event.endDate
									? "primary"
									: "grey"
							}
						/>
						{i < eventsToUse.length - 1 && <TimelineConnector />}
					</TimelineSeparator>
					<TimelineContent>{event.name}</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default ChurchTimeline;
