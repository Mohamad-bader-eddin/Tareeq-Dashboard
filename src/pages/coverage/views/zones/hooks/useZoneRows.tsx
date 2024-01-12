import { Zone } from "../types/ZoneType";

const useZoneRows = ({ data }: { data: Zone[] }) => {
  const rows: Zone[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      name: el.name,
    })
  );
  return { rows };
};

export default useZoneRows;
