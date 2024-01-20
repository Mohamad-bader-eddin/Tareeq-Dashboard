import { format } from "date-fns";
import { WalletRow } from "../../../shoppers/views/info/types/walletType";
import { Client } from "../../types/clients";

const useClientsWaletRows = ({ data }: { data: Client }) => {
  const rows: WalletRow[] = [];
  data?.transactions.forEach((el) =>
    rows.push({
      id: el?.id,
      amount: el?.amount,
      reason: el?.transaction_type?.description as string,
      status: el?.status,
      createdAt: format(new Date(el?.created_at as Date), "dd/MM/yyyy"),
      transactionId: el?.id,
    })
  );

  return { rows };
};

export default useClientsWaletRows;
