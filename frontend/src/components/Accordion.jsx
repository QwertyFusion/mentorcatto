import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Lock, Check, Flag } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
    (
        {
            className,
            children,
            iconState,
            moduleNumber,
            moduleDescription,
            ...props
        },
        ref
    ) => {
        // Determine the icon based on the iconState prop
        let Icon;
        let cardBorderClass;
        let borderClass;
        let bgClass;
        let iconColorClass;

        switch (iconState) {
            case "locked":
                Icon = Lock;
                cardBorderClass = "border-tertiary cursor-not-allowed";
                borderClass = "border-white"; // White border for locked
                bgClass = ""; // Accent background for locked
                iconColorClass = "text-white"; // White icon color for locked
                break;
            case "unlocked":
                Icon = Flag;
                cardBorderClass = "border-tertiary cursor-pointer";
                borderClass = "border-white"; // White border for unlocked
                bgClass = ""; // Accent background for unlocked
                iconColorClass = "text-white"; // White icon color for unlocked
                break;
            case "completed":
                Icon = Check;
                cardBorderClass = "border-primary cursor-pointer";
                borderClass = "border-primary"; // Primary border for completed
                bgClass = "bg-primary"; // Primary background for completed
                iconColorClass = "text-black h-8 w-8 pt-0.5"; // Black icon color for completed
                break;
            default:
                Icon = null;
                cardBorderClass = "";
                borderClass = ""; // No border class for default
                bgClass = ""; // No background class for default
                iconColorClass = ""; // No icon color class for default
        }

        // Prevent opening if the iconState is "locked"
        const handleClick = (event) => {
            if (iconState === "locked") {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        return (
            <AccordionPrimitive.Header className="flex pt-4">
                <AccordionPrimitive.Trigger
                    ref={ref}
                    className={cn(
                        `flex flex-1 items-center justify-between p-4 font-medium transition-all hover:bg-accent-3 rounded-ten [&[data-state=open]>svg]:rotate-180 border-1 [&[data-state=open]]:bg-accent-3 no-select z-10 ${cardBorderClass} transition-all ease-in-out duration-300 bg-accent-1 drop-shadow-custom`,
                        className
                    )}
                    onClick={handleClick} // Add the click handler here
                    {...props}
                >
                    <div className="flex items-center">
                        <div
                            className={cn(
                                `border-2 rounded-full mr-2 flex justify-center items-center h-10 w-10 aspect-square ${borderClass} ${bgClass} drop-shadow-custom`
                            )}
                        >
                            {Icon && (
                                <Icon className={`h-6 w-6 ${iconColorClass}`} />
                            )}
                        </div>

                        <div className="flex flex-col items-start ml-2">
                            <div className="text-[12px]">{moduleNumber}</div>
                            <div className="text-[16px] font-bold text-white text-left">
                                {moduleDescription}
                            </div>
                        </div>
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 transition-transform ease-in-out duration-300" />
                </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
        );
    }
);

const AccordionContent = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className="mt-[-32px] overflow-hidden bg-accent-1 border-1 border-tertiary rounded-ten text-sm transition-all ease-in-out duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn("pb-4 pt-8", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
