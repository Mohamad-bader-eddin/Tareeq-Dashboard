import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useStatsQuery = ({
  from,
  model,
  to,
  type,
  driver_id,
}: useStatsQueryProps) => {
  const fetchStats = () => {
    return axiosInstance.get(
      `/api/admin/stats?model=${model}&type=${type}&from=${from}&to=${to}&driver_id=${driver_id}`
    );
  };
  return useQuery(["stats", model, from, to], fetchStats, { enabled: false });
};

type useStatsQueryProps = {
  model: string;
  type: string;
  from?: string;
  to?: string;
  driver_id: string;
};

export default useStatsQuery;
