import { DirectusClientConfig, DirectusConfig, DirectusGraphqlClient } from "./types/DirectusConfig"
import { createDirectus, graphql } from "@directus/sdk"

function buildDirectusUrl(config: DirectusClientConfig): string {
  const url = new URL(`${config.proto}://${config.host}`)
  if (config.port) {
    url.port = config.port.toString()
  }
  return url.toString()
}

export function useDirectusGraphql(config: DirectusConfig): DirectusGraphqlClient {
  const url = buildDirectusUrl(config.client)
  return createDirectus(url).with(graphql())
}
