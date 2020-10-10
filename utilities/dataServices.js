import { useEffect, useState } from "react";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
	space,
	accessToken,
});

const useFetchBlogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const entries = await client.getEntries({
					content_type: "blog",
					select:
						"sys.id,fields.title,fields.category,fields.coverPhoto,fields.content,fields.publishedDate",
					order: "-fields.publishedDate",
				});

				setBlogs(entries.items);
			} catch (err) {
				console.log(err);
			}
		}

		fetchData();
	}, []);

	return blogs;
};

module.exports = {
	useFetchBlogs,
};
