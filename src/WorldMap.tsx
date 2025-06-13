// WorldMap.tsx
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const WorldMap = () => (
  <div className="w-full max-w-4xl mx-auto">
    <ComposableMap projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              className="cursor-pointer transition-all duration-200 hover:fill-blue-500"
              style={{
                default: { fill: '#DDD', outline: 'none' },
                hover: { fill: '#1E90FF', outline: 'none' },
                pressed: { fill: '#1E90FF', outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);
