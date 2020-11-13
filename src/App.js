import React, { useState } from "react";

import "./App.css";

import { isInCurAdvent } from "./helpers/dateHelper";

import Header from "./components/Header";
import ChurchTimeline from "./components/ChurchTimeline";
import ButtonContainer from "./components/ButtonContainer";
import VerseTypeButton from "./components/VerseTypeButton";
import TheotokiaGame from "./components/TheotokiaGame";
import BibleVerseGame from "./components/BibleVerseGame";
import Footer from "./components/Footer";

function App() {
	const today = new Date();
	const todayMonth = today.getMonth(); // returns number from 0 to 11
	const todayDay = today.getDate(); // returns number from 1 to 31

	const [curMonth, setCurMonth] = useState(todayMonth);
	const [curDay, setCurDay] = useState(todayDay);

	const [isTheotokia, setIsTheotokia] = useState(true); // start user in theotokia mode, they can switch to bible verse mode

	return (
		<div>
			<Header />
			<ChurchTimeline />

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
				{isTheotokia ? (
					<TheotokiaGame day={curDay} month={curMonth} />
				) : (
					<BibleVerseGame day={todayDay} month={todayMonth} />
				)}
			</div>
			{/* )} */}
			<Footer />
		</div>
	);
}

export default App;
