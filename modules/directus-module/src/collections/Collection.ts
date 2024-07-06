import { DirectusGraphqlClient } from "../types/DirectusConfig"

export interface Collection<T> {
  client: DirectusGraphqlClient
  items: Array<T>

  fetchItems(): Promise<Array<T>>
}
