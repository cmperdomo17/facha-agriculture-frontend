import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css';
import MarkerIcon from '../../../public/marker-icon.png';
import MarkerShadow from '../../../public/marker-shadow.png';
const HeatLayer = dynamic(() => import('./HeatLayer').then((mod) => mod.default), { ssr: false });

const MapComponent = ({ heatPoints }: { heatPoints: [number, number, number][] }) => {
    const [L, setL] = useState<typeof import('leaflet') | null>(null);
    const coord: [number, number] = [2.43823, -76.61316];

    useEffect(() => {
        import('leaflet').then((L) => {
            setL(L);
        });
    }, []);

    if (!L) return <p>Cargando mapa...</p>;

    return (
        <>
            <MapContainer style={{
                width: "100%",
                height: "400px",
                borderRadius: "20px"
            }} center={coord} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <HeatLayer points={heatPoints} />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={coord}>
                    <Popup>
                        Un marcador de ejemplo.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default MapComponent;