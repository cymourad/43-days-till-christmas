import React, { useState } from "react";

import "./App.css";

import { isInCurAdvent } from "./helpers/dateHelper";

import Header from "./components/Header";
import ChurchTimeline from "./components/ChurchTimeline";
import GreatIsTheMysteryOfGodliness from "./components/GreatIsTheMysteryOfGodliness";
import ButtonContainer from "./components/ButtonContainer";
import VerseTypeButton from "./components/VerseTypeButton";
import DownloadCompetitionSheet from "./components/DownloadCompetitionSheet";
import TheotokiaGame from "./components/TheotokiaGame";
import BibleVerseGame from "./components/BibleVerseGame";
import Footer from "./components/Footer";

function App() {
	const today = new Date();
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	const [curMonth, setCurMonth] = useState(todayMonth);
	const [curDay, setCurDay] = useState(todayDay);

	const [isTheotokia, setIsTheotokia] = useState(false); // TODO start user in theotokia mode, they can switch to bible verse mode

	const [showMyFavVerse, setShowMyFavVerse] = useState(false); // start by not showing my favorite verse

	return (
		<div>
			<Header />

			<ChurchTimeline />

			{/* <GreatIsTheMysteryOfGodliness
				showAccordion={showMyFavVerse}
				setShowAccordion={setShowMyFavVerse}
			/> */}

			{/* TODO ucomment this isInCurAdvent condition to only open game during advent */}
			{/* {isInCurAdvent() && ( */}
			<div>
				{isTheotokia && (
					<ButtonContainer
						curDay={curDay}
						curMonth={curMonth}
						setCurDay={setCurDay}
						setCurMonth={setCurMonth}
					/>
				)}

				<VerseTypeButton
					isTheotokia={isTheotokia}
					setIsTheotokia={setIsTheotokia}
				/>

				<br />
				<DownloadCompetitionSheet isTheotokia={isTheotokia} />

				{isTheotokia ? (
					<TheotokiaGame day={curDay} month={curMonth} />
				) : (
					<BibleVerseGame day={todayDay} month={todayMonth} />
					// <BibleVerseGame day={curDay} month={curMonth} />
				)}
			</div>
			{/* )} */}
			<Footer />
		</div>
	);
}

export default App;
