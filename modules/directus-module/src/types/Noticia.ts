import { BasicItem } from "./BasicItem"
import { Portal } from "./Portal"

export type Noticia = BasicItem & {
  imagem: string
  descricao_curta: string
  conteudo: string
  destaque: boolean
  portais?: Array<Portal> | Array<string>
}
