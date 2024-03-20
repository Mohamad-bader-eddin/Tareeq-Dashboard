import { Notifications } from "../../notifications/types/NotificationsType";
import { NotificationsOptions } from "../types";

const useNotificationsMapper = ({ data }: { data: Notifications[] }) => {
  const notificationsOptions: NotificationsOptions[] = [];
  data?.forEach((el) =>
    notificationsOptions.push({
      id: el.id as string,
      title: el.title,
      message: el.description,
    })
  );
  return { notificationsOptions };
};

export default useNotificationsMapper;
