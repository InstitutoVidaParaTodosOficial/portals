export enum ItemStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived"
}

export type BasicItem = {
  id: string
  status: ItemStatus
  created_at: string
  created_by: string
  updated_by: string
  updated_at: string
}
