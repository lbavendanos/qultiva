import app from '@/config/app'
import { objGet } from './object'
import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

/**
 * Gets the specified configuration value.
 *
 * @template T - The type of default value and return value
 * @param {string} path - The path of the configuration to get.
 * @param {T} [defaultValue] - The value returned if the resolved value is undefined.
 * @returns {T} Returns the resolved value.
 */
export function config<T = any>(path: string, defaultValue?: T): T {
  return objGet({ app }, path, defaultValue)
}

/**
 * A utility for constructing className strings conditionally.
 *
 * @param {ClassValue[]} inputs - The class names to add.
 * @returns {string} Returns the resolved class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
