import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { CVContext } from "@/context/CVContext";
import YourCV from "@/dashboard/cv/components/YourCV";
import { useUserCV } from "@/dashboard/useUserCV";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

function View() {
  const { cvID } = useParams();
  const [cvDetail, setCvDetail] = useState();

  const { userCV, isLoading } = useUserCV();

  useEffect(() => {
    setCvDetail(userCV);
  }, [userCV]);

  const handlePDF = () => {
    window.print();
  };

  return (
    <CVContext.Provider value={{ cvDetail, setCvDetail }}>
      <div id="no-print">
        <Header />
        <div className="my-10 sm:mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Download & Share your CV
          </h2>
          <div className="my-10 flex justify-between px-12 lg:px-44">
            <Button onClick={handlePDF}>Download</Button>
            <RWebShare
              data={{
                text: "Like humans, flamingos make friends for life",
                url: import.meta.env.VITE_BASE_URL + "/my-cv/" + cvID + "/view",
                title: "CV Maker AI",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin" />
        </div>
      ) : (
        <div id="print-area" className="mx-10 my-10 md:mx-20 lg:mx-36">
          <YourCV />
        </div>
      )}
    </CVContext.Provider>
  );
}

export default View;
