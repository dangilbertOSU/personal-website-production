/*
 * Function Imports
 */

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

/*
 * Component Imports
 */

import pdfHelper from "../../../components/PDF/pdfHelper";
import ArticlePDF from "../../../components/ArticlePDF";

const Download = () => {
	return (
		<div>
			<p>download</p>
		</div>
	);
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
	const { res } = context;
	const { id } = context.query;
	const { API_URL, API_PORT } = publicRuntimeConfig;

	/*
	 * Fetching article data by ID
	 */

	const result = await fetch(`${API_URL}:${API_PORT}/articles/${id}`);
	const data = await result.json();

	const buffer = await pdfHelper.componentToPDFBuffer(
		<ArticlePDF article={data} />
	);

	const filename = data.title.split(" ").slice(0, 2).join("_");

	res.setHeader(
		"Content-disposition",
		`attachment; filename="${filename}.pdf"`
	);
	res.setHeader("Content-Type", "application/pdf");
	res.end(buffer);

	return {};
}

export default Download;
