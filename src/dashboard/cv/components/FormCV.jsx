import { Button } from "@/components/ui/button";
import UserInfo from "./forms/UserInfo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import UserSummary from "./forms/UserSummary";
import Experience from "./forms/Experience";

function FormCV() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
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
        <Button
          className="flex gap-2 text-white"
          size="sm"
          disabled={!enableNext}
          onClick={() => setActiveForm((activeForm) => activeForm + 1)}
        >
          Next <ArrowRight />
        </Button>
      </div>
      {activeForm == 1 && <UserInfo enableNext={(v) => setEnableNext(v)} />}
      {activeForm == 2 && <UserSummary enableNext={(v) => setEnableNext(v)} />}
      {activeForm == 3 && <Experience enableNext={(v) => setEnableNext(v)} />}
    </div>
  );
}

export default FormCV;
