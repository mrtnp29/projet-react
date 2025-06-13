// WorldMap.tsx
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const WorldMap = () => {
  const navigate = useNavigate();

  const handleCountryClick = (geo: any) => {
    let countryName = geo.properties.name;
    console.log(countryName)
    navigate(`/destination/${encodeURIComponent(countryName)}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                className="cursor-pointer transition-all duration-200 hover:fill-blue-500"
                style={{
                  default: { fill: '#DDD', outline: 'none' },
                  hover: { fill: '#dc781e', outline: 'none' },
                  pressed: { fill: '#1E90FF', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};
