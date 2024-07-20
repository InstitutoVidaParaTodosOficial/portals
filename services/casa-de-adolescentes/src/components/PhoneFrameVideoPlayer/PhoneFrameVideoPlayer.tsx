import { styled } from "styled-components"

const DEFAULTS = {
  height: "438px",
  width: "347px"
}

const PhoneFrameContainer = styled.div<{
  width: string
  height: string
}>`
  position: relative;
  width: ${props => props.width || DEFAULTS.width};
  height: ${props => props.height || DEFAULTS.height};
  border: 16px black solid;
  border-bottom: 0;
  border-top-width: 60px;
  border-radius: 36px 36px 0 0;

  /* The horizontal line on the top of the device */
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }
`

const VideoPlayer = styled.video`
  background-color: white;
  height: 100%;
  width: 100%;
`

type PhoneFramePlayerProps = {
  videoUrl: string
  videoType?: string
  width?: string
  height?: string
  displayVideoControls?: boolean
}

export default function PhoneFrameVideoPlayer({
  videoUrl,
  videoType = "video/mp4",
  height = DEFAULTS.height,
  width = DEFAULTS.width,
  displayVideoControls = false
}: PhoneFramePlayerProps) {
  const onVideoPlayEvent = (video: HTMLVideoElement) => {
    video.paused ? video.play() : video.pause()
  }

  return (
    <PhoneFrameContainer width={width} height={height}>
      <VideoPlayer controls={displayVideoControls} onClick={e => onVideoPlayEvent(e.target as HTMLVideoElement)}>
        <source type={videoType} src={videoUrl} />
      </VideoPlayer>
    </PhoneFrameContainer>
  )
}
