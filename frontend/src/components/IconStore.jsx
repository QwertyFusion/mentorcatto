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
    } else if (color === "black") {
        fillColor = "#000000";
    } else if (color === "gray") {
        fillColor = "#99a1af";
    } else if (color === "tertiary") {
        fillColor = "#6a7592";
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
            case "tick":
                return (
                    <svg
                        className={className}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={fillColor}
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                );
            case "search":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={className}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={fillColor}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
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
