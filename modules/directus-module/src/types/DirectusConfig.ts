import { DirectusClient, GraphqlClient } from "@directus/sdk"
import { DirectusSchema } from "./DirectusSchema"

export type DirectusGraphqlClient = DirectusClient<DirectusSchema> & GraphqlClient<DirectusSchema>

export type DirectusClientConfig = {
  proto: "http" | "https"
  host: string
  port?: number
}

export type DirectusConfig = {
  client: DirectusClientConfig
}
