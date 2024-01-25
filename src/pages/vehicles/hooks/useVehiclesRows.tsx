import { format } from "date-fns";
import { Vehicle, VehicleRows } from "../types/Vehicles";

const useVehiclesRows = ({ data }: { data: Vehicle[] }) => {
  const rows: VehicleRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      name: el.name,
      // priceByKm: Number(el.price_by_km),
      // priceByTime: Number(el.price_by_time),
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useVehiclesRows;
