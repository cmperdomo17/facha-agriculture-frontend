'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MapComponent = dynamic(() => import('./MapComponent'), {
    ssr: false,
    loading: () => <p>Cargando mapa...</p>
});

export default function Map() {
    const [heatPoints, setHeatPoints] = useState<[number, number, number][]>([]);

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

            <MapComponent heatPoints={heatPoints} />

            <Link href={"/"}>
                <Button>Regresar</Button>
            </Link>
        </div>
    );
}