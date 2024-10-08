'use client'

import L from 'leaflet'
import MarkerIcon from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'facha-agriculture-frontend/node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Map() {

    const coord: [number, number] = [2.43823, -76.61316]

    return (
        <div className='flex flex-col gap-6'>
            <h1 className="text-4xl font-black">
                MAPA
            </h1>

            <MapContainer style={{
                width: "100%",
                height: "400px"
            }} center={coord} zoom={14} scrollWheelZoom={false}>
    
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

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
    )
}