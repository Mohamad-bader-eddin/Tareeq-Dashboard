import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useLocationVotesQuery = () => {
  const fetchLocationVotes = () => {
    return axiosInstance.get("/api/admin/voteLocation");
  };
  return useQuery("location-vote", fetchLocationVotes);
};

export default useLocationVotesQuery;
