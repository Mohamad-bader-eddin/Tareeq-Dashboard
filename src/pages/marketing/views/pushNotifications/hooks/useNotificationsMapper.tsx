import { Option } from "../../../../../share/types";
import { Notifications } from "../../notifications/types/NotificationsType";

const useNotificationsMapper = ({ data }: { data: Notifications[] }) => {
  const notificationsOptions: Option[] = [];
  data?.forEach((el) =>
    notificationsOptions.push({
      id: el.id as string,
      name: el.title,
    })
  );
  return { notificationsOptions };
};

export default useNotificationsMapper;
