import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";

const fetchLocationVote = ({ queryKey }: { queryKey: QueryKey }) => {
  const locationVoteId = queryKey[1];
  return axiosInstance.get(`/api/admin/voteLocation/${locationVoteId}`);
};

const useLocationVoteQuery = (locationVoteId: string) => {
  return useQuery(["location-vote", locationVoteId], fetchLocationVote);
};

export default useLocationVoteQuery;
