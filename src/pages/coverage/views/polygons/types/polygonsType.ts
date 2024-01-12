export type Polygons = {
    id?: string;
    lat: number;
    long: number;
    zone_id: number;
    created_at?: Date
}

export type PolygonsRow = {
    id: string;
    zoneName?: string;
}