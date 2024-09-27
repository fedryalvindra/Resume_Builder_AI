import { Button } from "@/components/ui/button";
import UserInfo from "./forms/UserInfo";
import { ArrowLeft, ArrowRight, Home, View } from "lucide-react";
import { useState } from "react";
import UserSummary from "./forms/UserSummary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import HardSkills from "./forms/HardSkills";
import { Link, Navigate, useParams } from "react-router-dom";
import SoftSkills from "./forms/SoftSkills";

function FormCV() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const { cvID } = useParams();

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button>
              <Home />
            </Button>
          </Link>
          {activeForm > 1 ? (
            <Button
              className="flex gap-2 text-white"
              size="sm"
              onClick={() => setActiveForm((activeForm) => activeForm - 1)}
            >
              <ArrowLeft /> Back
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        {activeForm === 7 ? (
          <div></div>
        ) : (
          <Button
            className="flex gap-2 text-white"
            size="sm"
            disabled={!enableNext}
            onClick={() => setActiveForm((activeForm) => activeForm + 1)}
          >
            Next <ArrowRight />
          </Button>
        )}
      </div>
      {activeForm === 1 && <UserInfo enableNext={(v) => setEnableNext(v)} />}
      {activeForm === 2 && <UserSummary enableNext={(v) => setEnableNext(v)} />}
      {activeForm === 3 && <Experience enableNext={(v) => setEnableNext(v)} />}
      {activeForm === 4 && <Education />}
      {activeForm === 5 && <HardSkills />}
      {activeForm === 6 && <SoftSkills />}
      {activeForm === 7 && <Navigate to={`/my-cv/${cvID}/view`} />}
    </div>
  );
}

export default FormCV;
