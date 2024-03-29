import { format } from "date-fns";
import { Promo, UsedPromoRows } from "../../../types/promoType";

const useUserUsedThisCouponRows = ({ data }: { data: Promo }) => {
  const rows: UsedPromoRows[] = [];
  data?.used_promos?.forEach((el) =>
    rows.push({
      id: el.id,
      amount: data.amount,
      user: el?.user?.name + " " + el?.user?.last_name,
      userId: el?.user?.id,
      createdAt: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useUserUsedThisCouponRows;
