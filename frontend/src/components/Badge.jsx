import React, { useEffect, useRef } from "react";

const Badge = ({ icon, title, description, locked }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!locked && icon && svgRef.current) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(icon, "image/svg+xml");
            const svgElement = doc.documentElement;

            if (svgRef.current.firstChild) {
                svgRef.current.removeChild(svgRef.current.firstChild);
            }
            svgRef.current.appendChild(svgElement);
        }
    }, [icon, locked]);

    return (
        <div className="flex items-center justify-center w-full">
            {/* Hexagon */}
            <div className="relative flex items-center justify-center h-22 aspect-square z-10">
                <svg
                    viewBox="-0.64 -0.64 17.28 17.28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                >
                    <g strokeWidth="0"></g>
                    <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke={`${locked ? "#6a7592" : "#abf07c"}`}
                        strokeWidth="1.25"
                    >
                        <path d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"></path>
                    </g>
                    <g>
                        <path
                            fill={`${locked ? "#3c3d48" : "#42424e"}`}
                            d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                        ></path>
                    </g>
                </svg>

                {/* Icon centered inside the hexagon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {locked ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6a7592"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 animate-shake"
                        >
                            <rect
                                width="18"
                                height="11"
                                x="3"
                                y="11"
                                rx="2"
                                ry="2"
                            />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    ) : (
                        <div ref={svgRef} className="animate-bounce-slow" />
                    )}
                </div>
            </div>

            {/* Badge Text */}
            <div
                className={`flex w-full items-center rounded-ten pl-15 ml-[-45px] p-3 my-3 
                ${
                    locked ? "bg-accent-3 inner-shadow" : "bg-accent-1"
                } text-white`}
            >
                <div>
                    <div
                        className={`${
                            locked ? "text-accent-5" : "text-primary"
                        } text-lg`}
                    >
                        {title}
                    </div>
                    <div
                        className={`${
                            locked ? "text-tertiary" : "text-secondary"
                        } text-sm`}
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badge;
