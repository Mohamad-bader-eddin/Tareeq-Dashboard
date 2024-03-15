import { format } from "date-fns";
import { Notifications, NotificationsRows } from "../types/NotificationsType";

const useNotificationRows = ({ data }: { data: Notifications[] }) => {
  const rows: NotificationsRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      message: el.description,
      title: el.title,
      createdAt: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useNotificationRows;
