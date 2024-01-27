import { format } from "date-fns";
import { BlackList, BlackListRow } from "../types/BlackList";

const useBlackListRows = ({ data }: { data: BlackList[] }) => {
  const rows: BlackListRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el?.id,
      phone: el?.bannedable?.phone,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useBlackListRows;
