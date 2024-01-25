import { format } from "date-fns";
import { Drivers } from "../../../types/Drivers";
import { WalletRow } from "../types/walletType";

const useShopperWaletRows = ({ data }: { data: Drivers }) => {
  const rows: WalletRow[] = [];
  data?.transactions?.forEach((el) =>
    rows.push({
      id: el?.id,
      amount: el?.amount,
      reason: el?.transaction_type?.description as string,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
      transactionId: el.id,
    })
  );
  return { rows };
};

export default useShopperWaletRows;
