import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

import * as geoUrl from "@/components/world-map/assets/countries-110m.json"
import * as brazilStatesGeoUrl from "@/components/world-map/assets/br_states.json"

type WorldMapProps = {
  countryColors?: Record<string, string>
  markers?: { name: string; coordinates: [number, number] }[]
  loadBrazilianStatesBorders: boolean
}

export default function WorldMap({
  countryColors = {},
  markers = [],
  loadBrazilianStatesBorders = false
}: WorldMapProps) {
  const handleZoomEvent = (event: WheelEvent): boolean => {
    return event.metaKey
  }

  return (
    <ComposableMap style={{ backgroundColor: "var(--primary-color)" }}>
      <ZoomableGroup filterZoomEvent={handleZoomEvent}>
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
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={3} fill="#F53" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  )
}
