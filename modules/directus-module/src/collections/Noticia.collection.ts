import { Collection } from "./Collection"
import { Noticia } from "../types/Noticia"
import { DirectusGraphqlClient } from "../types/DirectusConfig"

export class NoticiaCollection implements Collection<Noticia> {
  public items: Array<Noticia> = []

  constructor(public readonly client: DirectusGraphqlClient) {}

  async fetchItems(): Promise<Array<Noticia>> {
    this.items = await this.client.query<Noticia[]>(`
      query {
          noticias {
              id,
              descricao_curta,
              imagem,
              conteudo
          }
      }
    `)

    return this.items
  }
}
