import { Zone } from "../../zones/types/ZoneType";

export type Polygons = {
    id?: string;
    lat: number;
    long: number;
    zone_id: number;
    zone?: Zone
    created_at?: Date
}

export type PolygonsRow = {
    id: string;
    zoneName: string;
}

type PolygonStore = {
    lat: number;
    long: number;
    zone_id: string;
}

export type PolygonsStore = {
    polygons: PolygonStore[]
}