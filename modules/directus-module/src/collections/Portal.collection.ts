import { Collection } from "./Collection"
import { Portal } from "../types/Portal"
import { DirectusGraphqlClient } from "../types/DirectusConfig"

export class PortalCollection implements Collection<Portal> {
  public items: Portal[] = []

  constructor(public readonly client: DirectusGraphqlClient) {}

  async fetchItems(): Promise<Array<Portal>> {
    this.items = await this.client.query<Portal[]>(`
      query {
        portais {
          id
          nome
          logo
        }
      }
    `)

    return this.items
  }
}
