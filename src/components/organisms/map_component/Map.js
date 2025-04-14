"use client";

import dynamic from "next/dynamic";
import {mapTypeConfigs} from "@/components/molecules/map_component_types/MapTypesComponent";


const DynamicMap = dynamic(() => import("../../molecules/DynamicMap"), {
    ssr: true,
});

export default function Map({ mapType = "default", override = {} }) {
    const config = { ...mapTypeConfigs[mapType], ...override };

    return (
        <div style={{ width: config.width, height: config.height, margin: 0, padding: 0 }}>
            <DynamicMap
                width={config.width}
                height={config.height}
                zoom={config.zoom}
                center={config.center}
            />
        </div>
    );
}
