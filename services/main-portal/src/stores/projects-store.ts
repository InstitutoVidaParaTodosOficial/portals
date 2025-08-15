import { createStore } from "zustand"

import MOCK_DATA from "./__mock__/projects.json"

export type Project = {
  title: string
  order?: number
  logo?: {
    url?: string
    backgroundColor?: string
  }
  paragraphs: string[]
  featuredImageUrl?: string
  imagesUrls?: string[]
  subProjects?: Project[]
  worldMap?: {
    countryColorsConfig: Record<string, string>
    markers: { name: string; coordinates: [number, number] }[]
  }
}

export type ProjectState = {
  projects: Project[]
}

export type ProjectActions = {
  getProjects: (lang?: string) => void
}

export type ProjectsStore = ProjectState & ProjectActions

export const defaultInitState: ProjectState = {
  projects: []
}

type ProjectsI18nData = Record<string, Project[]>
const projectsData = MOCK_DATA as ProjectsI18nData

export const createProjectStore = (initState: ProjectState = defaultInitState) => {
  return createStore<ProjectsStore>()(set => ({
    ...initState,
    getProjects: (lang = "pt-BR") => {
      const projects = (projectsData[lang] || []).slice().sort((a, b) => {
        if (a.order === undefined || b.order === undefined) return 0
        return a.order - b.order
      })
      set(() => ({ projects }))
    }
  }))
}
