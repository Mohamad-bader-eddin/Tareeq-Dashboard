import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportLocationVotesQuery = () => {
  const exportLocationVotes = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/voteLocation?download=true&from=${from}&to=${to}`,
      { responseType: "blob" }
    );
    return response;
  };
  return useMutation(exportLocationVotes);
};

export default useExportLocationVotesQuery;
