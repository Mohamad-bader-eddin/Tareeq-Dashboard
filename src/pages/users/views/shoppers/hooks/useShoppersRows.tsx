import { format } from "date-fns";
import { Drivers, DriversRows } from "../types/Drivers";

const useShoppersRows = ({ data }: { data: Drivers[] }) => {
  const rows: DriversRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      name: el.name,
      phone: el.phone,
      registerDate: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useShoppersRows;
