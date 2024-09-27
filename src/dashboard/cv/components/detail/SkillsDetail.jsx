function HardSkillsDetail({ cvDetail }) {
  return (
    <div className="my-6">
      <h2 className="mb-2 text-center text-sm font-bold">Skills</h2>
      <hr />
      <div className="flex flex-col">
        <div>
          <span className="text-xs font-bold">Hard Skills:</span>
          {cvDetail?.hardSkills?.map((skill, i) => (
            <span key={i} className="text-xs">
              {" "}
              {skill?.name}
              {cvDetail?.hardSkills?.length - 1 === i ? "" : ","}
            </span>
          ))}
        </div>
        <div>
          <span className="text-xs font-bold">Soft Skills:</span>
          {cvDetail?.softSkills?.map((skill, i) => (
            <span key={i} className="text-xs">
              {" "}
              {skill?.name}
              {cvDetail?.softSkills?.length - 1 === i ? "" : ","}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkillsDetail;
