'use client'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import Link from "next/link";

import MarkerIcon from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-shadow.png';

const HeatLayer = ({ points }: { points: [number, number, number][] }) => {
    const map = useMap();

    L.heatLayer(points, { radius: 40 }).addTo(map);

    return null;
};

export default function Map() {
    const coord: [number, number] = [2.43823, -76.61316];

    // Ejemplo de puntos de calor: [latitud, longitud, intensidad]
    const heatPoints: [number, number, number][] = [
        [2.43823, -76.61316, 0.5],
        [2.43850, -76.61350, 0.8],
        [2.43870, -76.61370, 0.3],
        [2.43880, -76.61380, 0.7],
        [2.43890, -76.61390, 0.2],
        [2.43900, -76.61400, 0.6],
        [2.43910, -76.61410, 0.1],
        [2.43920, -76.61420, 0.9],
        [2.43930, -76.61430, 0.4],
        [2.43940, -76.61440, 0.8],
        [2.43950, -76.61450, 0.3],
    ];

    return (
        <div className='flex flex-col gap-6'>
            <h1 className="text-4xl font-black">
                MAPA
            </h1>

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
                } position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <Link href={"/"}>
                <Button>Regresar</Button>
            </Link>
        </div>
    );
}