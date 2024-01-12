import { Client, ClientRows } from "../types/clients";
import { format } from "date-fns";

const useClientsRows = ({ data }: { data: Client[] }) => {
  const rows: ClientRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      name: el.name,
      phone: el.phone,
      email: el.email,
      platform: el.platform,
      joinDate: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );

  return { rows };
};

export default useClientsRows;
