import { createStore } from "zustand"

import MOCK_DATA from "./__mock__/projects.json"

export type Project = {
  title: string
  titleIcon?: string
  paragraphs: string[]
  imagesUrls?: string[]
  subProjects?: Project[]
}

export type ProjectState = {
  projects: Project[]
}

export type ProjectActions = {
  getProjects: () => void
}

export type ProjectsStore = ProjectState & ProjectActions

export const defaultInitState: ProjectState = {
  projects: []
}

export const createProjectStore = (initState: ProjectState = defaultInitState) => {
  return createStore<ProjectsStore>()(set => ({
    ...initState,
    getProjects: () => set(() => ({ projects: MOCK_DATA }))
  }))
}
