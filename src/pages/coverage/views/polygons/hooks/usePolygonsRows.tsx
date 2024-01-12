import { Polygons, PolygonsRow } from "../types/polygonsType";

const usePolygonsRows = ({ data }: { data: Polygons[] }) => {
  const rows: PolygonsRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
    })
  );
  return { rows };
};

export default usePolygonsRows;
