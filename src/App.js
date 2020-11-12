import React, { useState } from "react";
import Header from "./components/Header";
import ButtonContainer from "./components/ButtonContainer";
import CurrentDay from "./components/CurrentDay";
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
			<ButtonContainer setCurDay={setCurDay} setCurMonth={setCurMonth} />
			<CurrentDay month={curMonth} day={curDay} />
			<VerseTypeButton
				isTheotokia={isTheotokia}
				setIsTheotokia={setIsTheotokia}
			/>
			{isTheotokia ? (
				<TheotokiaGame day={curDay} month={curMonth} />
			) : (
				<BibleVerseGame day={curDay} month={curMonth} />
			)}
			<Footer />
		</div>
	);
}

export default App;
