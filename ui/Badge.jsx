import React from "react";
import { cn } from "./Button";

export default function Badge({ children, className }) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800", className)}>
      {children}
    </span>
  );
}
