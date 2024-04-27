import { useMutation } from "react-query";
import { PolygonImport } from "../../types/polygonsType";
import axiosMultipart from "../../../../../../auth/axiosMultipart";

const addPolygon = (polygon: PolygonImport) => {
  const formData = new FormData();
  formData.append("file", polygon.file);
  formData.append("zone_id", polygon.zone_id);
  return axiosMultipart.post("/api/admin/polygon/import", formData);
};

const useAddPolugonQuery = () => {
  return useMutation(addPolygon);
};
export default useAddPolugonQuery;
