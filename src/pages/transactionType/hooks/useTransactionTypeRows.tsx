import { format } from "date-fns";
import { TransactionType, TransactionTypeRow } from "../types/TransactionType";

const useTransactionTypeRows = ({ data }: { data: TransactionType[] }) => {
  const rows: TransactionTypeRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      type: el.type,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useTransactionTypeRows;
