import { format } from "date-fns";
import { Drivers, DriversRows } from "../types/Drivers";

const useShoppersRows = ({ data }: { data: Drivers[] }) => {
  const rows: DriversRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as number,
      name: el.name,
      phone: el.phone,
      registerDate: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
      zone: el?.zone?.name,
    })
  );
  return { rows };
};

export default useShoppersRows;
