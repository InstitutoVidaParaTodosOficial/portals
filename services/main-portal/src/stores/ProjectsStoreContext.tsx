import React, { createContext, useContext, ReactNode } from "react"
import { createProjectStore, ProjectsStore } from "./projects-store"
import { StoreApi, useStore } from "zustand"

const ProjectsStoreContext = createContext<StoreApi<ProjectsStore> | null>(null)

export const ProjectsStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = React.useRef(createProjectStore()).current
  return <ProjectsStoreContext.Provider value={store}>{children}</ProjectsStoreContext.Provider>
}

export function useProjectsStore<T>(selector: (state: ProjectsStore) => T): T {
  const store = useContext(ProjectsStoreContext)
  if (!store) throw new Error("useProjectsStore must be used within a ProjectsStoreProvider")
  return useStore(store, selector)
}
