import styled from "styled-components"

const IframeWrapper = styled.div<{ $maxWidth?: string }>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  aspect-ratio: 2 / 1;
`
type YouTubeVideoPlayerProps = {
  videoId: string
  maxWidth?: string
}

export default function YouTubeVideoPlayer({ videoId, maxWidth }: YouTubeVideoPlayerProps) {
  return (
    <IframeWrapper $maxWidth={maxWidth}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
      />
    </IframeWrapper>
  )
}
