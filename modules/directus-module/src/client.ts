import { DirectusClientConfig, DirectusConfig, Schema } from "./types/DirectusConfig"
import { createDirectus, DirectusClient, graphql, GraphqlClient } from "@directus/sdk"

function buildDirectusUrl(config: DirectusClientConfig): string {
  const url = new URL(`${config.proto}://${config.host}`)
  if (config.port) {
    url.port = config.port.toString()
  }
  return url.toString()
}

export function useDirectusGraphql(config: DirectusConfig): DirectusClient<Schema> & GraphqlClient<Schema> {
  const url = buildDirectusUrl(config.client)
  return createDirectus(url).with(graphql())
}
