// MarkdownRenderer.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold my-4">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold my-3">{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-semibold my-2">{children}</h3>
                ),
                p: ({ children }) => <p className="my-2">{children}</p>,
                ul: ({ children }) => (
                    <ul className="list-disc pl-5 my-2">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal pl-5 my-2">{children}</ol>
                ),
                li: ({ children }) => <li className="my-1">{children}</li>,
                code: ({ children }) => (
                    <code className="bg-gray-200 rounded p-1">{children}</code>
                ),
                pre: ({ children }) => (
                    <pre className="bg-gray-800 text-white p-3 rounded my-2">
                        <SyntaxHighlighter
                            language="javascript"
                            style={solarizedlight}
                        >
                            {children}
                        </SyntaxHighlighter>
                    </pre>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
