import { writable } from "svelte/store"

export * from './volume-data'
export * from './settings'
export * from './misc'

export const isActive = writable(true)
