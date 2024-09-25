import { useParams } from "react-router-dom";
import FormCV from "../components/FormCV";
import YourCV from "../components/YourCV";
import { CVContext } from "@/context/CVContext";
import { useEffect, useState } from "react";
import dummy from "@/data/dummy";

function EditCV() {
  const { cvID } = useParams();
  const [cvDetail, setCvDetail] = useState();
  useEffect(() => {
    setCvDetail(dummy);
  }, []);
  return (
    <CVContext.Provider value={{cvDetail, setCvDetail}}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormCV />
        <YourCV />
      </div>
    </CVContext.Provider>
  );
}

export default EditCV;
