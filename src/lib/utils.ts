import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
//edit 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
