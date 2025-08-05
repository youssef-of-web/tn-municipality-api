import * as React from "react";
import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
    return (
        <div className="relative w-full">
            <select
                data-slot="select"
                className={cn(
                    "appearance-none bg-transparent border border-input rounded-md px-3 py-2 h-9 text-xs shadow-xs outline-none transition-[color,box-shadow] file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    "pr-10",
                    className
                )}
                {...props}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
    );
}

export { Select };