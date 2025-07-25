import { useEffect } from "react"
import styled from "styled-components"

import FancyTitle from "@/components/fancy-title/FancyTitle"
import Carousel from "@/components/carousel/Carousel"
import { useProjectsStore } from "@/stores/ProjectsStoreContext"
import { Project } from "@/stores/projects-store"

const ProjectsWrapper = styled.div`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 100px 32px;
`

const ImageWrapper = styled.div<{ url: string }>`
  width: 300px;
  height: 250px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`

export default function ProjectsSection() {
  const projects = useProjectsStore(state => state.projects)
  const getProjects = useProjectsStore(state => state.getProjects)

  useEffect(() => {
    getProjects()
  }, [getProjects])

  return (
    <ProjectsWrapper>
      {projects.map((project, index) => (
        <div key={index}>
          <FancyTitle title={project.title} />
          {project.paragraphs.map((content: string, idx: number) => (
            <p key={idx}>{content}</p>
          ))}
          {project.subProjects && project.subProjects.length > 0 && (
            <div>
              {project.subProjects.map((sub: Project, subIdx: number) => (
                <div key={subIdx}>
                  <h3>{sub.title}</h3>
                  {sub.paragraphs &&
                    sub.paragraphs.map((subPara: string, paraIdx: number) => <p key={paraIdx}>{subPara}</p>)}
                </div>
              ))}
            </div>
          )}
          {project.imagesUrls && project.imagesUrls.length > 0 && (
            <Carousel>
              {project.imagesUrls.map((url: string, idx: number) => (
                <ImageWrapper url={url} key={idx} />
              ))}
            </Carousel>
          )}
        </div>
      ))}
    </ProjectsWrapper>
  )
}
