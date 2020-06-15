const createClassStack = (classList) =>
	classList
		.map((className) => {
			if (Array.isArray(className)) {
				return createClassStack(className);
			}

			return className;
		})
		.filter((a) => a)
		.join(" ");

const dateFormatter = (date) => {
	const dateArray = date.split("-");
	const months = [
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dev",
	];
	const year = dateArray[0];
	const month = parseInt(dateArray[1]);
	const day = dateArray[2];

	return `${day} ${months[month + 1]} ${year}`;
};

module.exports = {
	createClassStack,
	dateFormatter,
};
