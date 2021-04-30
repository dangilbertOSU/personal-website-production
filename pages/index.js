import { useRef } from 'react';
import Head from "next/head";
import Biography from "../components/Biography";

import {
	fetchBiography,
	fetchExperiences,
	fetchBlogs,
	fetchProjects,
} from "../utilities/utilities";

/*
 * Component Imports
 */

import Fragment from "../components/Fragment";
import Layout from "../components/Layout";
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ArticleGrid from '../components/ArticleGrid';

const sections = ["Bio", "Experience", "Projects", "Blogs"];

const App = ({ biography, experiences, projects, blogs }) => {

	const bioRef = useRef();
	const experienceRef = useRef();
	const projRef = useRef();
	const blogRef = useRef();

	const scrollToSection = (section) => {
		switch(section) {
			case "Bio":
				bioRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case "Experience":
				experienceRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case "Projects":
				projRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case "Blogs":
				blogRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
	}

	return (
		<>
			<Head>
				<title>Dannon Gilbert</title>
				<meta
					name="keywords"
					content="resume,react,node,express,javascript,developer,software,engineer"
				/>
				<meta
					name="description"
					content="I specialize in full stack development with years of experience in React. "
				/>
			</Head>
			<Layout sections={sections} scrollToSection={scrollToSection}>
				<span ref={bioRef}>
					<Fragment>
						<Biography biography={biography} />
					</Fragment>
				</span>
				<span ref={experienceRef}>
					<Fragment >
						<Experience experiences={experiences} />
					</Fragment>
				</span>
				<span ref={projRef}>
					<Fragment>
						<Projects projects={projects} />
					</Fragment>
					</span>
				<span ref={blogRef}>
					<Fragment>
						<ArticleGrid articles={blogs} />
					</Fragment>
				</span>
			</Layout>
		</>
	);
};


/*
 * Fetch biography
 */

export async function getStaticProps() {
	try {
		const biography = await fetchBiography();

		const biographyObject = {
			name: biography.fields.name,
			description: biography.fields.description,
			links: biography.fields.socialLinks.map(link => ({
				website: link.fields.website,
				image: {
					url: link.fields.image.fields.file.url,
				},
				link: link.fields.link,
			})),
		}

		const experiences = await fetchExperiences();

		const projects = await fetchProjects();

		const blogs = await fetchBlogs();

		return {
			props: {
				biography: biographyObject,
				experiences,
				projects,
				blogs,
			},
		};
	} catch (err) {
		return {
			props: {},
		};
	}
}

export default App;
