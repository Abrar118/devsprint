export const getCurrentTime = () => {
	const offset = new Date().getTimezoneOffset() * 60 * 1000;
	const timeStamp = new Date().toISOString();
	return timeStamp;
};

export const getTextFormattedTime = (date: Date) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const formattedString = `${days[date.getDay()]} ${date.getDate()} ${
		months[date.getMonth()]
	}, ${date.getFullYear()}`;
	+", " + date.getFullYear();

	return formattedString;
};

export const getFormattedDateWithTime = (date: Date) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const today: Date = new Date();
	const isToday: boolean =
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear();

	const formattedString = `${
		(isToday
			? "Today, "
			: `${days[date.getDay()]} ${date.getDate()} ${
					months[date.getMonth()]
			  }, ${date.getFullYear()}, `) + date.getHours()
	}:${date.getMinutes()}`;

	return formattedString;
};

export const checkAllCaps = (word: string) => {
	let check = true;

	for (let i = 0; i < word.length; i++) {
		if (word[i] !== word[i].toUpperCase()) {
			check = false;
			break;
		}
	}

	return check;
};

export const compareDates = (date1: Date, date2: Date) => {
	if (date1 < date2) return -1;
	if (date1 > date2) return 1;
	return 0;
};
