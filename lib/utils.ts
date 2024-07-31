import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  if (!string) return string; // Handle empty string or null
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Format the selected date range
export function formatDateRange(range: {
  from: Date | undefined;
  to: Date | undefined;
}): string {
  if (range.from && range.to) {
    const formattedFrom = format(range.from, "MMM dd, yyyy");
    const formattedTo = format(range.to, "MMM dd, yyyy");
    return `${formattedFrom} - ${formattedTo}`;
  }
  return "Pick a date range";
}
