import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                strong: ({ children }) => (
                    <span className="font-bold">{children}</span>
                ),
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 my-4 text-primary underline underline-offset-4">
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-8 my-4 text-primary underline underline-offset-4">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-5 my-4 text-primary">
                        {children}
                    </h3>
                ),
                p: ({ children }) => <p className="font-inter">{children}</p>,
                ul: ({ children }) => (
                    <ul className="list-disc pl-5  my-4">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal pl-5  my-4">{children}</ol>
                ),
                li: ({ children }) => <li className=" my-4">{children}</li>,

                // ✅ Handle code properly
                code: ({ className, children }) => {
                    const language = className
                        ? className.replace("language-", "")
                        : null;

                    // Inline Code (small code snippets inside text)
                    if (!language) {
                        return (
                            <code className="bg-[#1D1F21] text-[#91d076] px-1 rounded">
                                {children}
                            </code>
                        );
                    }

                    // Block Code (Big Code Blocks)
                    return (
                        <SyntaxHighlighter
                            language={language}
                            style={coldarkDark}
                            className="rounded-ten inner-shadow"
                        >
                            {String(children).trim()}
                        </SyntaxHighlighter>
                    );
                },
                table: ({ children }) => (
                    <table className="min-w-full border-collapse border-2 border-accent-1">
                        {children}
                    </table>
                ),
                tr: ({ children }) => (
                    <tr className="border-b-2 border-accent-1">{children}</tr>
                ),
                th: ({ children }) => (
                    <th className="border-accent-1 border-2 p-2 text-left bg-primary text-accent-4">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="border-2 border-accent-1 p-2">{children}</td>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
