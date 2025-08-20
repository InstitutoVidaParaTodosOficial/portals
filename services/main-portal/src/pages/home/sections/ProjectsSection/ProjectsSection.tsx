import { useEffect } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { useRouter } from "next/router"

import FancyTitle from "@/components/fancy-title/FancyTitle"
import Carousel from "@/components/carousel/Carousel"
import { useProjectsStore } from "@/stores/ProjectsStoreContext"
import { Project } from "@/stores/projects-store"
import WorldMap from "@/components/world-map/WorldMap"

const ProjectsWrapper = styled.div`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 100px 32px 0px 32px;
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
  const { locale } = useRouter()

  useEffect(() => {
    getProjects(locale)
  }, [getProjects, locale])

  return (
    <ProjectsWrapper>
      {projects.map((project, index) => (
        <div key={index}>
          <FancyTitle
            logoBackgroundColor={project.logo?.backgroundColor}
            imageSrc={project.logo?.url}
            title={project.title}
          />
          {project.paragraphs.map((content: string, idx: number) => (
            <ReactMarkdown key={idx}>{content}</ReactMarkdown>
          ))}
          {project.subProjects && project.subProjects.length > 0 && (
            <div>
              {project.subProjects.map((sub: Project, subIdx: number) => (
                <div key={subIdx}>
                  <h3>{sub.title}</h3>
                  {sub.paragraphs &&
                    sub.paragraphs.map((subPara: string, paraIdx: number) => (
                      <ReactMarkdown key={paraIdx}>{subPara}</ReactMarkdown>
                    ))}
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
          {project.worldMap && (
            <WorldMap
              markers={project.worldMap.markers}
              additionalTexts={project.worldMap.additionalTexts}
              countryColors={project.worldMap.countryColorsConfig}
              loadBrazilianStatesBorders={true}
            />
          )}
        </div>
      ))}
    </ProjectsWrapper>
  )
}
