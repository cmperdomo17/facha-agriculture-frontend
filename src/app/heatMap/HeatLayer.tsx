import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

const HeatLayer = ({ points }: { points: [number, number, number][] }) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const heat = L.heatLayer(points, { radius: 30 }).addTo(map);

        return () => {
            map.removeLayer(heat);
        };
    }, [map, points]);

    return null;
};

export default HeatLayer;