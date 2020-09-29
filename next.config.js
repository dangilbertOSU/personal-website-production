const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
require("dotenv").config();

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

module.exports = withCSS(
	withImages({
		ignoreTypes: ["svg"],

		env: {
			API_URL: process.env.API_URL,
			API_PORT: process.env.API_PORT,
		},

		publicRuntimeConfig: {
			API_URL: process.env.API_URL,
			API_PORT: process.env.API_PORT,
		},

		webpack: (config) => {
			config.module.rules.push({
				test: /\.svg$/,
				issuer: {
					test: /\.(js|ts)x?$/,
				},
				use: ["@svgr/webpack"],
			});

			return config;
		},
	})
);
