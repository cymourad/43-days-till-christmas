import { monthNumber } from "./monthsOfTheYear";

const verses = [
	{
		month: monthNumber.November,
		day: 25,
		book: "mt",
		chapter: 1,
		number: 25,
		body:
			"[Joseph] did not know her till she had brought forth her firstborn Son. And he called His name Jesus.",
	},
	{
		month: monthNumber.November,
		day: 26,
		book: "lk",
		chapter: 1,
		number: 46,
		body:
			"And Mary said: My soul magnifies the Lord, And my spirit has rejoiced in God my Savior.",
	},
	{
		month: monthNumber.November,
		day: 27,
		book: "lk",
		chapter: 1,
		number: 42,
		body: "Blessed are you among women, and blessed is the fruit of your womb!",
	},
	{
		month: monthNumber.November,
		day: 28,
		book: "lk",
		chapter: 1,
		number: 43,
		body:
			"But why is this granted to me, that the mother of my Lord should come to me?",
	},
	{
		month: monthNumber.November,
		day: 29,
		book: "lk",
		chapter: 1,
		number: 31,
		body:
			"And behold, you will conceive in your womb and bring forth a Son, and shall call His name Jesus.",
	},
	{
		month: monthNumber.November,
		day: 30,
		book: "lk",
		chapter: 1,
		number: 32,
		body:
			" He will be great, and will be called the Son of the Highest; and the Lord God will give Him the throne of His father David.",
	},
	{
		month: monthNumber.December,
		day: 1,
		book: "lk",
		chapter: 1,
		number: 35,
		body:
			"The Holy Spirit will come upon you, and the power of the Highest will overshadow you;",
	},
	{
		month: monthNumber.December,
		day: 2,
		book: "lk",
		chapter: 2,
		number: 11,
		body:
			"For there is born to you this day in the city of David a Savior, who is Christ the Lord.",
	},
	{
		month: monthNumber.December,
		day: 3,
		book: "ps",
		chapter: 2,
		number: 7,
		body: "The Lord has said to Me, ‘You are My Son, Today I have begotten You",
	},
	{
		month: monthNumber.December,
		day: 4,
		book: "is",
		chapter: 7,
		number: 14,
		body:
			"Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.",
	},
	{
		month: monthNumber.December,
		day: 5,
		book: "is",
		chapter: 9,
		number: 6,
		body:
			"For unto us a Child is born, unto us a Son is given; and the government will be upon His shoulder.",
	},
	{
		month: monthNumber.December,
		day: 6,
		book: "1kgs",
		chapter: 13,
		number: 2,
		body: "Behold, a child ... shall be born to the house of David",
	},
	{
		month: monthNumber.December,
		day: 7,
		book: "mt",
		chapter: 2,
		number: 6,
		body:
			"But you, Bethlehem, in the land of Judah, are not the least among the rulers of Judah; for out of you shall come a Ruler who will shepherd My people Israel.",
	},
	{
		month: monthNumber.December,
		day: 8,
		book: "is",
		chapter: 25,
		number: 9,
		body:
			"Behold, this is our God; we have waited for Him, and He will save us. This is the Lord; we have waited for Him; we will be glad and rejoice in His salvation.",
	},
	{
		month: monthNumber.December,
		day: 9,
		book: "2sm",
		chapter: 3,
		number: 18,
		body: "By the hand of My servant David, I will save My people Israel",
	},
	{
		month: monthNumber.December,
		day: 10,
		book: "ps",
		chapter: 20,
		number: 6,
		body: "Now I know that the Lord saves His anointed",
	},
	{
		month: monthNumber.December,
		day: 11,
		book: "is",
		chapter: 19,
		number: 20,
		body:
			"and He will send them a Savior and a Mighty One, and He will deliver them.",
	},
	{
		month: monthNumber.December,
		day: 12,
		book: "is",
		chapter: 43,
		number: 3,
		body: "For I am the Lord your God, the Holy One of Israel, your Savior;",
	},
	{
		month: monthNumber.December,
		day: 13,
		book: "lk",
		chapter: 1,
		number: 35,
		body:
			"therefore, also, that Holy One who is to be born will be called the Son of God",
	},
	{
		month: monthNumber.December,
		day: 14,
		book: "is",
		chapter: 4,
		number: 2,
		body: "In that day the Branch of the Lord shall be beautiful and glorious",
	},
	{
		month: monthNumber.December,
		day: 15,
		book: "is",
		chapter: 11,
		number: 1,
		body:
			"There shall come forth a Rod from the stem of Jesse, and a Branch shall grow out of his roots",
	},
	{
		month: monthNumber.December,
		day: 16,
		book: "zec",
		chapter: 3,
		number: 8,
		body: "For behold, I am bringing forth My Servant the BRANCH",
	},
	{
		month: monthNumber.December,
		day: 17,
		book: "hos",
		chapter: 11,
		number: 1,
		body: "And out of Egypt I called My son",
	},
	{
		month: monthNumber.December,
		day: 18,
		book: "mt",
		chapter: 1,
		number: 25,
		body: "And he called His name Jesus",
	},
	{
		month: monthNumber.December,
		day: 19,
		book: "ps",
		chapter: 89,
		number: 26,
		body: "You are my Father, my God, and the rock of my salvation.",
	},
	{
		month: monthNumber.December,
		day: 20,
		book: "zec",
		chapter: 13,
		number: 9,
		body: "They will call on My name, and I will answer them.",
	},
	{
		month: monthNumber.December,
		day: 21,
		book: "mt",
		chapter: 1,
		number: 21,
		body:
			"And she will bring forth a Son, and you shall call His name Jesus, for He will save His people from their sins.",
	},
	{
		month: monthNumber.December,
		day: 22,
		book: "1tm",
		chapter: 3,
		number: 16,
		body: "great is the mystery of godliness: God was manifested in the flesh,",
	},
	{
		month: monthNumber.December,
		day: 23,
		book: "gn",
		chapter: 49,
		number: 10,
		body:
			"The scepter shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh comes; and to Him shall be the obedience of the people.",
	},
	{
		month: monthNumber.December,
		day: 24,
		book: "mt",
		chapter: 2,
		number: 2,
		body:
			"Where is He who has been born King of the Jews? For we have seen His star in the East and have come to worship Him.",
	},
	{
		month: monthNumber.December,
		day: 25,
		book: "ez",
		chapter: 44,
		number: 2,
		body:
			"And the Lord said to me, “This gate shall be shut; it shall not be opened, and no man shall enter by it, because the Lord God of Israel has entered by it; therefore it shall be shut.",
	},
	{
		month: monthNumber.December,
		day: 26,
		book: "jn",
		chapter: 3,
		number: 17,
		body:
			"For God did not send His Son into the world to condemn the world, but that the world through Him might be saved.",
	},
	{
		month: monthNumber.December,
		day: 27,
		book: "jn",
		chapter: 10,
		number: 9,
		body: "I am the door. If anyone enters by Me, he will be saved,",
	},
	{
		month: monthNumber.December,
		day: 28,
		book: "is",
		chapter: 46,
		number: 13,
		body: "My salvation shall not linger.",
	},
	{
		month: monthNumber.December,
		day: 29,
		book: "lk",
		chapter: 1,
		number: 69,
		body:
			"And has raised up a horn of salvation for us in the house of His servant David,",
	},
	{
		month: monthNumber.December,
		day: 30,
		book: "ps",
		chapter: 28,
		number: 8,
		body:
			"The Lord is their strength, and He is the saving refuge of His anointed.",
	},
	{
		month: monthNumber.December,
		day: 31,
		book: "gn",
		chapter: 49,
		number: 18,
		body: "I have waited for your salvation, O Lord!",
	},
	{
		month: monthNumber.January,
		day: 1,
		book: "2sm",
		chapter: 22,
		number: 51,
		body:
			"He is the tower of salvation to His king, and shows mercy to His anointed, to David and his descendants forevermore.",
	},
	{
		month: monthNumber.January,
		day: 2,
		book: "mt",
		chapter: 1,
		number: 1,
		body:
			"The book of the genealogy of Jesus Christ, the Son of David, the Son of Abraham",
	},
	{
		month: monthNumber.January,
		day: 3,
		book: "ps",
		chapter: 118,
		number: 14,
		body: "The Lord is my strength and song, and He has become my salvation.",
	},
	{
		month: monthNumber.January,
		day: 4,
		book: "ps",
		chapter: 20,
		number: 6,
		body: "Now I know that the Lord saves His anointed;",
	},
	{
		month: monthNumber.January,
		day: 5,
		book: "ps",
		chapter: 13,
		number: 5,
		body:
			"But I have trusted in Your mercy; my heart shall rejoice in Your salvation",
	},
	{
		month: monthNumber.January,
		day: 6,
		book: "ps",
		chapter: 27,
		number: 1,
		body: "The Lord is my light and my salvation; whom shall I fear?",
	},
	{
		month: monthNumber.January,
		day: 7,
		book: "jn",
		chapter: 1,
		number: 14,
		body:
			"And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.",
	},
];

export default verses;
