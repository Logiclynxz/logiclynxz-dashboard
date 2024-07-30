import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  if (!string) return string; // Handle empty string or null
  return string.charAt(0).toUpperCase() + string.slice(1);
}
