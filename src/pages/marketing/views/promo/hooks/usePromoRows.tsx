import { format } from "date-fns";
import { Promo, PromoRow } from "../types/promoType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";
import { getType } from "../utils/getType";

const usePromoRows = ({ data }: { data: Promo[] }) => {
  const rows: PromoRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      amount: convertPriceToSY(parseInt(el?.amount)),
      type: getType(el.type),
      code: el.code,
      isActive: el.is_active,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default usePromoRows;
