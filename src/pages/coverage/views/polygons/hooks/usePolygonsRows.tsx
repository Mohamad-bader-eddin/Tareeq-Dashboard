import { Zone } from "../../../../../share/types";
import { PolygonsRow } from "../types/polygonsType";

const usePolygonsRows = ({ data }: { data: Zone[] }) => {
  const rows: PolygonsRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      zoneName: el?.name as string,
    })
  );
  return { rows };
};

export default usePolygonsRows;
