const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
require("dotenv").config();

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
