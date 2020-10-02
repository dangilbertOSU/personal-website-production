import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";

class CodeBlock extends PureComponent {
     static propTypes = {
          value: PropTypes.string.isRequired,
     };

     render() {
          const { value } = this.props;
          return (
               <SyntaxHighlighter language="javascript" style={synthwave84} showLineNumbers="true">
                    {value}
               </SyntaxHighlighter>
          );
     }
}

export default CodeBlock;