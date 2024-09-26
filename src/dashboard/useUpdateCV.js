import { updateCV } from "@/service/apiUserCV";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useUpdateCV() {
  const { cvID } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (cvData) => updateCV({ cv: { ...cvData }, cvID }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cv"],
      });
    },
    onError: (err) => console.log(err.message),
  });

  return { mutate, isPending };
}
