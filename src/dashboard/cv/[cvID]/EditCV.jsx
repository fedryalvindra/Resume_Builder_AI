import { CVContext } from "@/context/CVContext";
import { useUserCV } from "@/dashboard/useUserCV";
import { useEffect, useState } from "react";
import FormCV from "../components/FormCV";
import YourCV from "../components/YourCV";

function EditCV() {
  const { userCV, isLoading } = useUserCV();
  const [cvDetail, setCvDetail] = useState();
  useEffect(() => {
    setCvDetail(userCV);
  }, [userCV]);
  if (isLoading) return;

  return (
    <CVContext.Provider value={{ cvDetail, setCvDetail }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormCV />
        <YourCV />
      </div>
    </CVContext.Provider>
  );
}

export default EditCV;
