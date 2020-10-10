import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/*
 * This file Next.js will recognize as an override to control page initialization
 */

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

					{/* Google fonts */}
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"
						rel="stylesheet"
					/>

					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
						rel="stylesheet"
					/>

					<link rel="shortcut icon" href="./static/favicon.ico" />

					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
