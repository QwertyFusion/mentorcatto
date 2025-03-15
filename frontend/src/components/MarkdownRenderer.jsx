import { CheckCheck, Copy } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content }) => {
    const [copyDoneMarker, setCopyDoneMarker] = useState(false);

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyDoneMarker(true);
            setTimeout(() => {
                setCopyDoneMarker(false);
            }, 2500);
        });
    };

    return (
        <div className="relative">
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
                    p: ({ children }) => (
                        <p className="font-inter">{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-5 my-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-5 my-4">{children}</ol>
                    ),
                    li: ({ children }) => <li className="my-4">{children}</li>,

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
                        const codeString = String(children).trim();

                        return (
                            <div className="relative my-4">
                                <div className="flex justify-between items-center bg-accent-3 p-2 px-4 -mb-2 rounded-t-ten">
                                    <span className="text-[#91d076] no-select">
                                        {language}
                                    </span>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(codeString)
                                        }
                                        className="text-primary p-2 rounded hover:bg-accent-1 cursor-pointer"
                                    >
                                        {!copyDoneMarker ? (
                                            <Copy className="h-4 w-4" />
                                        ) : (
                                            <CheckCheck className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                                <SyntaxHighlighter
                                    language={language}
                                    style={coldarkDark}
                                    className="rounded-b-ten"
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            </div>
                        );
                    },
                    table: ({ children }) => (
                        <table className="min-w-full border-collapse border-2 border-[#1D1F21]">
                            {children}
                        </table>
                    ),
                    tr: ({ children }) => (
                        <tr className="border-b-2 border-[#1D1F21]">
                            {children}
                        </tr>
                    ),
                    th: ({ children }) => (
                        <th className="border-[#1D1F21] border-2 p-2 text-left bg-primary text-accent-4">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border-2 border-[#1D1F21] p-2">
                            {children}
                        </td>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
