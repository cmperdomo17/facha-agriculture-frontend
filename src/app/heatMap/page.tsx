'use client'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

import MarkerIcon from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-shadow.png';

const HeatLayer = ({ points }: { points: [number, number, number][] }) => {
    const map = useMap();

    L.heatLayer(points, { radius: 30 }).addTo(map);

    return null;
};

export default function Map() {
    const [heatPoints, setHeatPoints] = useState<[number, number, number][]>([]);
    const coord: [number, number] = [2.43823, -76.61316];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://fachaagricultureapi.onrender.com/heat_data', {
                    start_date: "2024-09-09",
                    interval_hours: 12,
                    end_interval_days: 10,
                    north_latitude: 3.5,
                    west_longitude: -78.5,
                    south_latitude: 1.5,
                    east_longitude: -75.5,
                    latitude_resolution: 0.5,
                    longitude_resolution: 0.5
                });
                
                const data = response.data.data;

                // [lat, lon, intensidad]
                const points = data.map((item: { lat: number, lon: number, 't_2m:C': number }) => [item.lat, item.lon, item['t_2m:C']]);
                setHeatPoints(points);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                } position={coord}>
                    <Popup>
                        Un marcador de ejemplo.
                    </Popup>
                </Marker>
            </MapContainer>
            <Link href={"/"}>
                <Button>Regresar</Button>
            </Link>
        </div>
    );
}
