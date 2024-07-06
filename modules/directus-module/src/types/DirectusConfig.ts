import { Portal } from "../collections"

export type DirectusConfig = {
  client: DirectusClientConfig
}

export type DirectusClientConfig = {
  proto: "http" | "https"
  host: string
  port?: number
}

export type Schema = {
  Portals: Portal
}
