import app from '@/config/app'
import { objGet } from './object'

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

export { default as cn } from 'clsx'
