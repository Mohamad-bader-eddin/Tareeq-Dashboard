import { Client, ClientRows } from "../types/clients";
import { format } from "date-fns";

const useClientsRows = ({ data }: { data: Client[] }) => {
  const rows: ClientRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      name: el.name + " " + el?.last_name,
      phone: el.phone,
      // platform: el.platform,
      joinDate: format(new Date(el.created_at), "dd/MM/yyyy HH:mm:ss"),
    })
  );

  return { rows };
};

export default useClientsRows;
