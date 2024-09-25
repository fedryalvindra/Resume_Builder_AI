import { useEffect, useState } from "react";
import AddCV from "./components/AddCV";
import useCV from "./useCV";
import CVItem from "./components/CVItem";

function Dashboard() {
  const [cvList, setCvList] = useState([]);
  const { cv: cvData, isLoadingCV } = useCV();

  useEffect(() => {
    if (cvData?.length > 0) setCvList(cvData);
  }, [cvData]);

  if (isLoadingCV) return;

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="text-3xl font-bold">My CV</h2>
      <p>Start Creating your CV</p>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        <AddCV />
        {cvList.length > 0 &&
          cvList?.map((cv) => <CVItem cv={cv} key={cv.id} />)}
      </div>
    </div>
  );
}

export default Dashboard;
