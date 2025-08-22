import { useEffect } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { useRouter } from "next/router"
import Image from "next/image"

import FancyTitle from "@/components/fancy-title/FancyTitle"
import Carousel from "@/components/carousel/Carousel"
import { useProjectsStore } from "@/stores/ProjectsStoreContext"
import { Project } from "@/stores/projects-store"
import WorldMap from "@/components/world-map/WorldMap"
import YouTubeVideoPlayer from "@/components/youtube-video-player/YouTubeVideoPlayer"

const ProjectsWrapper = styled.section`
  background-color: var(--primary-color);
  color: var(--white);
`

const Book = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const ProjectItem = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
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
        <ProjectItem key={index}>
          {/* Fancy Title */}
          <FancyTitle
            logoBackgroundColor={project.logo?.backgroundColor}
            imageSrc={project.logo?.url}
            title={project.title}
          />
          {project.paragraphs.map((content: string, idx: number) => (
            <ReactMarkdown key={idx}>{content}</ReactMarkdown>
          ))}
          {/* Sub Projects */}
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
          {/* Images URLs */}
          {(project.imagesUrls || project.YouTubeVideoIds) && (
            <Carousel>
              {project.YouTubeVideoIds &&
                project.YouTubeVideoIds.map((videoId: string) => (
                  <YouTubeVideoPlayer videoId={videoId} key={videoId} maxWidth="500px" />
                ))}
              {project.imagesUrls &&
                project.imagesUrls.map((url: string, idx: number) => {
                  return (
                    <Image width="300" height="250" alt={`${project.title} image ${idx + 1}`} src={url} key={url} />
                  )
                })}
            </Carousel>
          )}
          {project.books && (
            <Carousel overlapArrows={false}>
              {project.books.map(book => (
                <Book key={book.coverUrl} onClick={() => window.open(book.link, "_blank")}>
                  <Image width="120" height="180" src={book.coverUrl} alt={book.title} />
                </Book>
              ))}
            </Carousel>
          )}
          {/* World Map */}
          {project.worldMap && (
            <WorldMap
              markers={project.worldMap.markers}
              additionalTexts={project.worldMap.additionalTexts}
              countryColors={project.worldMap.countryColorsConfig}
              loadBrazilianStatesBorders={true}
            />
          )}
        </ProjectItem>
      ))}
    </ProjectsWrapper>
  )
}
