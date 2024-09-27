import { Button } from "@/components/ui/button";
import UserInfo from "./forms/UserInfo";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { useState } from "react";
import UserSummary from "./forms/UserSummary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Link } from "react-router-dom";

function FormCV() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

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
        {activeForm === 5 ? (
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
      {activeForm == 1 && <UserInfo enableNext={(v) => setEnableNext(v)} />}
      {activeForm == 2 && <UserSummary enableNext={(v) => setEnableNext(v)} />}
      {activeForm == 3 && <Experience enableNext={(v) => setEnableNext(v)} />}
      {activeForm == 4 && <Education />}
      {activeForm == 5 && <Skills />}
    </div>
  );
}

export default FormCV;
