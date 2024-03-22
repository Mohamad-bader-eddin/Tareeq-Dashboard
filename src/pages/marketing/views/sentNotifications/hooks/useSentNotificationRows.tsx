import { format } from "date-fns";
import { SentNotification, SentNotificationRows } from "../types";

const useSentNotificationRows = ({ data }: { data: SentNotification[] }) => {
  const rows: SentNotificationRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el?.id,
      user: el?.user?.name + " " + el?.user?.last_name,
      userType: el?.type,
      title: el?.title,
      message: el?.description,
      createdAt: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useSentNotificationRows;
