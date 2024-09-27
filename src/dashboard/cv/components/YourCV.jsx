import { CVContext } from "@/context/CVContext";
import { useContext } from "react";
import EducationDetail from "./detail/EducationDetail";
import ExperienceDetail from "./detail/ExperienceDetail";
import SkillsDetail from "./detail/SkillsDetail";
import SummaryDetail from "./detail/SummaryDetail";
import UserDetail from "./detail/UserDetail";

function YourCV() {
  const { cvDetail, setCvDetail } = useContext(CVContext);
  return (
    <div className="h-full p-14 border">
      <UserDetail cvDetail={cvDetail} />
      <SummaryDetail cvDetail={cvDetail} />
      <ExperienceDetail cvDetail={cvDetail} />
      <EducationDetail cvDetail={cvDetail} />
      <SkillsDetail cvDetail={cvDetail} />
    </div>
  );
}

export default YourCV;
