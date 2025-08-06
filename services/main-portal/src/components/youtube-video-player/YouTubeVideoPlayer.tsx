import styled from "styled-components"

type YouTubeVideoPlayerProps = {
  videoId: string
}

const IframeWrapper = styled.div`
  width: 100%;
  max-width: 560px;
`

export default function YouTubeVideoPlayer({ videoId }: YouTubeVideoPlayerProps) {
  return (
    <IframeWrapper>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
      />
    </IframeWrapper>
  )
}
