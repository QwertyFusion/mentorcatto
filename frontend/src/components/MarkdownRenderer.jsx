import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                strong: ({ children }) => (
                    <span className="text-[#e2ffce] font-bold">{children}</span>
                ),
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 text-primary underline underline-offset-4">
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-8 text-primary underline underline-offset-4">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-5 text-primary">
                        {children}
                    </h3>
                ),
                p: ({ children }) => (
                    <p className="my-2 font-inter">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc pl-5 my-2">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal pl-5 my-2">{children}</ol>
                ),
                li: ({ children }) => <li className="my-1">{children}</li>,

                // ✅ Handle code properly
                code: ({ className, children }) => {
                    const language = className
                        ? className.replace("language-", "")
                        : null;

                    // Inline Code (small code snippets inside text)
                    if (!language) {
                        return (
                            <code className="bg-[#1D1F21] text-white italic px-1 rounded">
                                {children}
                            </code>
                        );
                    }

                    // Block Code (Big Code Blocks)
                    return (
                        <SyntaxHighlighter
                            language={language}
                            style={atomDark}
                            className="rounded-ten inner-shadow"
                        >
                            {String(children).trim()}
                        </SyntaxHighlighter>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
