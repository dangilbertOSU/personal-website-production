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
	const dateArray = date.split(" ");
	const months = [
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dev",
	];

	const month = months.indexOf(dateArray[1]);
	const day = dateArray[2];
	const year = dateArray[3].substring(2, 4);

	return `${month}/${day}/${year}`;
};

const space = "31arrc4mvgy8";
const accessToken = "Yt5YnHNkg6EqtKRwUIJrh3COzjqb1OVoWjjJB7DKpU0";

const client = require("contentful").createClient({
	space,
	accessToken,
});

const fetchEntries = async () => {
	const entries = await client.getEntries({
		content_type: "blog",
		select:
			"sys.id,fields.title,fields.category,fields.coverPhoto,fields.content,fields.publishedDate",
	});
	if (entries.items) {
		return entries.items;
	}
};

const fetchSpecificBlog = async (id) => {
	const entry = await client.getEntry(id);
	if (entry) return entry;

}

module.exports = {
	fetchEntries,
	fetchSpecificBlog,
	createClassStack,
	dateFormatter,
};
