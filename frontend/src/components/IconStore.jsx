const IconStore = ({ className, color, name }) => {
    let fillColor = ""; // Default color
    if (color === "primary") {
        fillColor = "#ABF07C";
    } else if (color === "danger") {
        fillColor = "oklch(0.637 0.237 25.331)";
    } else if (color === "white") {
        fillColor = "#FFFFFF";
    } else if (color === "accent-3") {
        fillColor = "#33333E";
    }

    const renderIcon = () => {
        switch (name) {
            case "dashboard":
                return (
                    <svg
                        className={className}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.1111 6.66667V0H20V6.66667H11.1111ZM0 11.1111V0H8.88889V11.1111H0ZM11.1111 20V8.88889H20V20H11.1111ZM0 20V13.3333H8.88889V20H0ZM2.22222 8.88889H6.66667V2.22222H2.22222V8.88889ZM13.3333 17.7778H17.7778V11.1111H13.3333V17.7778ZM13.3333 4.44444H17.7778V2.22222H13.3333V4.44444ZM2.22222 17.7778H6.66667V15.5556H2.22222V17.7778Z"
                            fill={fillColor}
                        />
                    </svg>
                );
            case "chat":
                return (
                    <svg
                        className={className}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke={fillColor}
                    >
                        <path
                            d="M8 10.5H16"
                            stroke={fillColor}
                            stroke-width="2.0"
                            stroke-linecap="round"
                        ></path>
                        <path
                            d="M8 14H13.5"
                            stroke={fillColor}
                            stroke-width="2.0"
                            stroke-linecap="round"
                        ></path>
                        <path
                            d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                            stroke={fillColor}
                            stroke-width="2.0"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                );
            case "courses":
                return (
                    <svg
                        className={className}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M447.716 97.794 297.207 10.993c-25.416-14.658-56.997-14.657-82.414 0L64.285 97.794C38.819 112.479 23 139.866 23 169.266v173.467c0 29.4 15.819 56.787 41.284 71.472l150.509 86.801c25.421 14.661 57.001 14.656 82.414 0l150.508-86.801C473.181 399.52 489 372.133 489 342.733V169.266c0-29.399-15.819-56.786-41.284-71.472zM449 342.733c0 15.144-8.148 29.251-21.266 36.815l-150.509 86.801c-13.093 7.552-29.358 7.552-42.451 0L84.265 379.548C71.148 371.983 63 357.877 63 342.733V169.266c0-15.143 8.148-29.25 21.266-36.814l150.508-86.801c13.094-7.552 29.364-7.549 42.452 0l150.509 86.8C440.852 140.016 449 154.122 449 169.266v173.467z"
                            fill={fillColor}
                        ></path>
                        <path
                            d="m236.994 240.729-74.281-62.863c-8.431-7.136-21.052-6.085-28.187 2.349-7.135 8.434-6.083 21.055 2.349 28.191L193.113 256l-56.238 47.593c-8.432 7.136-9.483 19.757-2.349 28.191 7.152 8.452 19.776 9.467 28.187 2.348l74.281-62.863c9.45-7.997 9.423-22.565 0-30.54zM362.206 298.859h-89.995c-11.046 0-20 8.955-20 20.003s8.954 20.003 20 20.003h89.995c11.045 0 20-8.955 20-20.003s-8.954-20.003-20-20.003z"
                            fill={fillColor}
                        ></path>
                    </svg>
                );
            case "achievements":
                return (
                    <svg
                        className={className}
                        viewBox="0 0 24 24"
                        fill={fillColor}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22,3H19V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H2A1,1,0,0,0,1,4V6a4.994,4.994,0,0,0,4.276,4.927A7.009,7.009,0,0,0,11,15.92V18H7a1,1,0,0,0-.949.684l-1,3A1,1,0,0,0,6,23H18a1,1,0,0,0,.948-1.316l-1-3A1,1,0,0,0,17,18H13V15.92a7.009,7.009,0,0,0,5.724-4.993A4.994,4.994,0,0,0,23,6V4A1,1,0,0,0,22,3ZM5,8.829A3.006,3.006,0,0,1,3,6V5H5ZM16.279,20l.333,1H7.387l.334-1ZM17,9A5,5,0,0,1,7,9V3H17Zm4-3a3.006,3.006,0,0,1-2,2.829V5h2ZM10.667,8.667,9,7.292,11,7l1-2,1,2,2,.292L13.333,8.667,13.854,11,12,9.667,10.146,11Z"></path>
                    </svg>
                );
            case "exam":
                return (
                    <svg
                        className={className}
                        fill={fillColor}
                        viewBox="0 0 24 24"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M24,12A12,12,0,0,1,0,12a1,1,0,0,1,2,0A10,10,0,1,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12ZM10.277,11H8a1,1,0,0,0,0,2h2.277A1.994,1.994,0,1,0,13,10.277V7a1,1,0,0,0-2,0v3.277A2,2,0,0,0,10.277,11ZM1.827,8.784a1,1,0,1,0-1-1A1,1,0,0,0,1.827,8.784ZM4.221,5.207a1,1,0,1,0-1-1A1,1,0,0,0,4.221,5.207ZM7.779,2.841a1,1,0,1,0-1-1A1,1,0,0,0,7.779,2.841Z"></path>
                    </svg>
                );
            case "settings":
                return (
                    <svg
                        className={className}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={fillColor}
                        version="1.1"
                        viewBox="0 0 54 54"
                        stroke={fillColor}
                        stroke-width="2.7"
                    >
                        <path d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571 c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571 c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78 C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571 c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571 c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052 c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966 c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42 c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052 c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553 c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114 S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22 C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571 c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854 c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052 c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572 c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294 C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052 c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553 c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78 C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64 c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104 l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"></path>
                        <path d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7 s7,3.141,7,7S30.859,34,27,34z"></path>
                    </svg>
                );

            case "logout":
                return (
                    <svg
                        className={className}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="matrix(-1, 0, 0, 1, 0, 0)"
                    >
                        <path
                            d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12"
                            stroke={fillColor}
                            stroke-width="2.0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                );
            case "send":
                return (
                    <svg
                        className={className}
                        fill={fillColor}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"></path>
                    </svg>
                );
            case "users":
                return (
                    <svg
                        className={className}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {" "}
                        <path
                            d="M15.6311 7.15517C15.9018 7.05482 16.1945 7 16.5001 7C17.8808 7 19.0001 8.11929 19.0001 9.5C19.0001 10.8807 17.8808 12 16.5001 12C16.1945 12 15.9018 11.9452 15.6311 11.8448"
                            stroke={fillColor}
                            stroke-width="2"
                            stroke-linecap="round"
                        ></path>{" "}
                        <path
                            d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"
                            stroke={fillColor}
                            stroke-width="2"
                            stroke-linecap="round"
                        ></path>{" "}
                        <path
                            d="M17 15C19.403 15.095 20.5292 15.6383 21 17"
                            stroke={fillColor}
                            stroke-width="2"
                            stroke-linecap="round"
                        ></path>{" "}
                        <path
                            d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                            stroke={fillColor}
                            stroke-width="2"
                        ></path>{" "}
                    </svg>
                );

            case "flag":
                return (
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 14C1 14 2 13 5 13C8 13 10 15 13 15C16 15 17 14 17 14V2C17 2 16 3 13 3C10 3 8 1 5 1C2 1 1 2 1 2V14Z"
                            stroke="#ABF07C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M1 21V14"
                            stroke="#ABF07C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                );
            case "checkmark":
                return (
                    <svg
                        width="26"
                        height="19"
                        viewBox="0 0 26 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.8182 2L8.81818 17L2 10.1818"
                            stroke="black"
                            stroke-width="3.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                );
            case "lock":
                return (
                    <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                );
            case "exam2":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <mask
                            id="mask0_11_447"
                            style="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                        >
                            <rect
                                width="20"
                                height="20"
                                fill="url(#pattern0_11_447)"
                            />
                        </mask>
                        <g mask="url(#mask0_11_447)">
                            <rect
                                x="0.5"
                                y="0.5"
                                width="19"
                                height="19"
                                fill="#D5EEE1"
                                stroke="white"
                            />
                        </g>
                        <defs>
                            <pattern
                                id="pattern0_11_447"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlink:href="#image0_11_447"
                                    transform="scale(0.0078125)"
                                />
                            </pattern>
                            <image
                                id="image0_11_447"
                                width="128"
                                height="128"
                                preserveAspectRatio="none"
                                xlink:href="data:image/png;base64,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"
                            />
                        </defs>
                    </svg>
                );
            // Add more cases for other icons if needed
            default:
                return null;
        }
    };

    return <>{renderIcon()}</>;
};

export default IconStore;
