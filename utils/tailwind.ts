import { clsx } from "clsx";
import type { ClassValue } from 'clsx'
import { twMerge } from "tailwind-merge";


export function withOpacity(variable: string, defaultValue = 1) {
  return (
    { opacityValue }: Partial<{ opacityVariable: string; opacityValue: number }>
  ) => `rgba(var(${variable}), ${opacityValue !== undefined ? opacityValue : defaultValue})`
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}