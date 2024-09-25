import { CVContext } from "@/context/CVContext";
import { useContext } from "react";
import UserDetail from "./detail/UserDetail";
import SummaryDetail from "./detail/SummaryDetail";
import ExperienceDetail from "./detail/ExperienceDetail";
import EducationDetail from "./detail/EducationDetail";
import SkillsDetail from "./detail/SkillsDetail";

function YourCV() {
    const {cvDetail, setCvDetail} = useContext(CVContext)
  return <div className="shadow-md h-full p-14">
    <UserDetail cvDetail={cvDetail}/>
    <SummaryDetail cvDetail={cvDetail}/>
    <ExperienceDetail cvDetail={cvDetail}/>
    <EducationDetail cvDetail={cvDetail}/>
    <SkillsDetail cvDetail={cvDetail} />
  </div>
}

export default YourCV;
