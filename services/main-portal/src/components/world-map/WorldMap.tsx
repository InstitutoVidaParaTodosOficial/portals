import { useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { useTranslations } from "next-intl"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

import styled from "styled-components"

import * as geoUrl from "@/components/world-map/assets/countries-110m.json"
import * as brazilStatesGeoUrl from "@/components/world-map/assets/br_states.json"

type Oceans = {
  name: string
  fontSize?: number
  coordinates: [number, number]
}

const OCEANS: Oceans[] = [
  { name: "pacific", coordinates: [-120, 0] },
  { name: "pacific", coordinates: [140, 20] },
  { name: "atlantic", coordinates: [-45, 30] },
  { name: "indian", coordinates: [80, -10] },
  { name: "arctic", coordinates: [0, 70] }
]

type WorldMapProps = {
  countryColors?: Record<string, string>
  markers?: {
    name: string
    markerText?: {
      text: string
      fontSize?: number
      x?: number
      y?: number
      textAnchor?: "start" | "middle" | "end"
      rotate?: `${string}deg`
    }
    coordinates: [number, number]
  }[]
  additionalTexts?: {
    text: string
    coordinates: [number, number]
    fontSize?: number
  }[]
  loadBrazilianStatesBorders: boolean
}

const WorldMapContainer = styled.div`
  position: relative;
`

const MapControllersBox = styled.div`
  position: absolute;
  right: 0;
`

const BASIC_TEXT_STYLE = {
  fontFamily: "Blinker",
  fontWeight: "bold"
}

const MapControllersWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 32px;

  label {
    display: flex !important;
    flex-direction: column;

    span {
      margin-bottom: 8px;
    }
  }

  select,
  button {
    padding: 8px !important;
  }
`

export default function WorldMap({
  countryColors = {},
  markers = [],
  additionalTexts = [],
  loadBrazilianStatesBorders = false
}: WorldMapProps) {
  console.log(additionalTexts)
  const [zoom, setZoom] = useState(1)
  const [center, setCenter] = useState<[number, number]>([0, 0])
  const [zoomEnabled, setZoomEnabled] = useState<boolean>(false)

  const t = useTranslations("world_map")

  const renderMultilineTspan = (text: string) => {
    return text.split("\n").map((line, i) => (
      <tspan x={0} dy={i === 0 ? "0" : "1.2em"} key={i}>
        {line.toUpperCase()}
      </tspan>
    ))
  }

  // event: WheelEvent
  const handleZoomEvent = (): boolean => {
    return zoomEnabled
  }

  const onMoveEndHandler = ({ zoom, coordinates }: { zoom: number; coordinates: [number, number] }) => {
    setZoom(zoom)
    setCenter(coordinates)
  }

  const handleResetZoom = () => {
    setZoom(1)
    setCenter([0, 0])
  }

  return (
    <WorldMapContainer>
      <MapControllersBox>
        <span>{t("controls.zoom_label")}</span>
        <MapControllersWrapper>
          <label style={{ display: "block" }}>
            <select value={zoomEnabled ? "true" : "false"} onChange={e => setZoomEnabled(e.target.value === "true")}>
              <option value="true">{t("controls.enabled")}</option>
              <option value="false">{t("controls.disabled")}</option>
            </select>
          </label>

          <button onClick={handleResetZoom}>{t("controls.reset_zoom")}</button>
        </MapControllersWrapper>
      </MapControllersBox>

      <ComposableMap style={{ backgroundColor: "var(--primary-color)" }}>
        <ZoomableGroup zoom={zoom} center={center} filterZoomEvent={handleZoomEvent} onMoveEnd={onMoveEndHandler}>
          {/* Oceans labels */}
          {OCEANS.map(({ name, fontSize, coordinates }) => (
            <Marker key={`${name}-${coordinates.join("-")}`} coordinates={coordinates}>
              <text
                y={0}
                textAnchor="middle"
                style={{
                  ...BASIC_TEXT_STYLE,
                  fontSize: fontSize || 8,
                  fill: "#b3e0ff",
                  textShadow: "1px 1px 2px #000"
                }}
              >
                {renderMultilineTspan(t(`oceans.${name}`))}
              </text>
            </Marker>
          ))}

          {/* World countries */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const countryName = geo.properties.name
                const hasCustomColor: boolean = Object.hasOwn(countryColors, countryName)
                const isBrasil = countryName === "Brazil"
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={hasCustomColor ? countryColors[countryName] : "#7D8795"}
                    stroke={hasCustomColor && !isBrasil ? "#fff" : undefined}
                    strokeWidth={hasCustomColor ? 0.3 : undefined}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" }
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Brazilian states borders */}
          {loadBrazilianStatesBorders && (
            <Geographies geography={brazilStatesGeoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="none"
                    stroke="#fff"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" }
                    }}
                  />
                ))
              }
            </Geographies>
          )}

          {/* Markers */}
          {markers.map(marker => (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <g transform="translate(-4, -8)">{FaMapMarkerAlt({ fill: "#d00", size: 8 })}</g>

              <text
                x={marker.markerText?.x || 0}
                y={marker.markerText?.y || 4}
                textAnchor={marker.markerText?.textAnchor || "middle"}
                style={{
                  ...BASIC_TEXT_STYLE,
                  fontSize: marker.markerText?.fontSize || 4,
                  letterSpacing: "0.1em",
                  fontWeight: "bold",
                  fill: "#fff",
                  transform: `rotate(${marker.markerText?.rotate || 0})`
                }}
              >
                {marker.markerText?.text && renderMultilineTspan(marker.markerText.text.toUpperCase())}
              </text>
            </Marker>
          ))}

          {/* Additional map text */}
          {additionalTexts.map(({ text, fontSize, coordinates }, idx) => (
            <Marker key={`additional-text-${idx}`} coordinates={coordinates}>
              <text
                y={0}
                textAnchor="middle"
                style={{
                  ...BASIC_TEXT_STYLE,
                  fontSize: fontSize || 10,
                  fill: "#fff",
                  textShadow: "1px 1px 2px #000"
                }}
              >
                {" "}
                {text}{" "}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </WorldMapContainer>
  )
}
