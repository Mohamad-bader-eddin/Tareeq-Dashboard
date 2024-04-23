import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { OrderQueryType } from "../../../types/OrderQueryType";

const fetchActiveOrders = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  const orderNumber = queryKey[3];
  const fromDate = queryKey[4];
  const toDate = queryKey[5];
  const phone = queryKey[6];
  const name = queryKey[7];
  const lastName = queryKey[8];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/active?page=${page}&limit=${limit}&order_id=${orderNumber}&from=${fromDate}&to=${toDate}&phone=${phone}&name=${name}&last_name=${lastName}`
  );
};

const useAvtiveOrdersQuery = ({
  page,
  limit,
  orderNumber,
  fromDate,
  toDate,
  name,
  phone,
  lasName,
}: OrderQueryType) => {
  return useQuery(
    [
      "active-orders",
      page ? page + 1 : 1,
      limit ? limit : 10,
      orderNumber,
      fromDate,
      toDate,
      phone,
      name,
      lasName,
    ],
    fetchActiveOrders,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useAvtiveOrdersQuery;
