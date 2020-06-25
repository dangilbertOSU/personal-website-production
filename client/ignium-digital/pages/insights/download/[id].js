/*
 * Function Imports
 */

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

import pdfHelper from "../../../components/PDF/pdfHelper";
import ArticlePDF from "../../../components/ArticlePDF";

const Download = (props) => {
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

	// with this header, your browser will prompt you to download the file
	// without this header, your browse will open the pdf directly
	res.setHeader("Content-disposition", 'attachment; filename="article.pdf');

	// set content type
	res.setHeader("Content-Type", "application/pdf");

	// output the pdf buffer. once res.end is triggered, it won't trigger the render method
	res.end(buffer);
}

export default Download;
