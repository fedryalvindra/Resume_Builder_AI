import { getUserCV } from "@/service/apiUserCV";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useUserCV() {
  const { cvID } = useParams();

  const { data: userCV, isLoading } = useQuery({
    queryKey: ["userCV"],
    queryFn: () => getUserCV(cvID),
  });

  return { userCV, isLoading };
}
