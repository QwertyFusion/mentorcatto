import React from "react";

const Badge = ({ icon, title, description, locked }) => {
    return (
        <div className="flex items-center w-full">
            {/* Add hexagon here */}
            <div
                className={`flex w-full items-center rounded-ten p-3 my-3 
                ${
                    locked ? "bg-accent-3 inner-shadow" : "bg-accent-1"
                } text-white`}
            >
                <div className="mr-3">{icon}</div>
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
