import React from "react";
import { cn } from "./Button";

export function Card({ className, children }) {
  return <div className={cn("card card-hover p-6 rounded-2xl", className)}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ className, children }) {
  return <h3 className={cn("text-xl font-bold text-gray-900", className)}>{children}</h3>;
}

export function CardContent({ className, children }) {
  return <div className={cn("space-y-3 text-gray-600", className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}
