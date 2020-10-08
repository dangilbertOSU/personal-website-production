import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = (props) => {
	const { value } = props;
	return (
		<SyntaxHighlighter
			language="javascript"
			style={synthwave84}
			showLineNumbers="true"
		>
			{value}
		</SyntaxHighlighter>
	);
};

CodeBlock.propTypes = {
	value: PropTypes.string.isRequired,
};

export default CodeBlock;
