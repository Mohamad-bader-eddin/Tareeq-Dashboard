import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useDeleteLocationVotesQuery = () => {
  const deleteLocationVotes = (locationVotesId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/voteLocation/${locationVotesId}`);
  };
  return useMutation(deleteLocationVotes);
};

export default useDeleteLocationVotesQuery;
