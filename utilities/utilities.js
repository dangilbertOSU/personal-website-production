const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

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
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dev",
	];

	const month = months.indexOf(dateArray[1]) + 1;
	const day = dateArray[2];
	const year = dateArray[3].substring(2, 4);

	return `${month}/${day}/${year}`;
};

const client = require("contentful").createClient({
	space,
	accessToken,
});

const fetchBlogs = async () => {
	const entries = await client.getEntries({
		content_type: "blog",
		select:
			"sys.id,fields.title,fields.category,fields.coverPhoto,fields.content,fields.publishedDate",
		order: "-fields.publishedDate",
	});
	if (entries.items) {
		return entries.items;
	}
};

const fetchExperiences = async () => {
	const entries = await client.getEntries({
		content_type: "experience",
		select:
			"sys.id,fields.jobTitle,fields.location,fields.date,fields.description",
	});
	if (entries.items) {
		return entries.items;
	} else {
		return [];
	}
}

const fetchProjects = async () => {
	const entries = await client.getEntries({
		content_type: "project",
		select:
			"sys.id,fields.title,fields.description,fields.skills",
	});
	if (entries.items) {
		return entries.items;
	} else {
		return [];
	}
}

const fetchSpecificBlog = async (id) => {
	const entry = await client.getEntry(id);
	if (entry) return entry;
};

const fetchBiography = async () => {
	const entry = await client.getEntry("6seJXwE2FenaLxd0PnOaiL");
	
	if (entry) return entry;
}

module.exports = {
	fetchBiography,
	fetchBlogs,
	fetchExperiences,
	fetchSpecificBlog,
	fetchProjects,
	createClassStack,
	dateFormatter,
};
