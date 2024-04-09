import { format } from "date-fns";
import { WalletRow } from "../../../shoppers/views/info/types/walletType";
import { Client } from "../../types/clients";
import { convertPriceToSY } from "../../../../../../share/utils/convertPriceToSY";

const useClientsWaletRows = ({ data }: { data: Client }) => {
  const rows: WalletRow[] = [];
  data?.transactions.forEach((el) =>
    rows.push({
      id: el?.id,
      order_id: el.order_id ? el.order_id : "Added by admin",
      amount: convertPriceToSY(parseInt(el?.amount)),
      reason: el?.transaction_type?.description as string,
      createdAt: format(
        new Date(el?.created_at as Date),
        "dd/MM/yyyy HH:mm:ss"
      ),
      transactionId: el?.id,
    })
  );

  return { rows };
};

export default useClientsWaletRows;
