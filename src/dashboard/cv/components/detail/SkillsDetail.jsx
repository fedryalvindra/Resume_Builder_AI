function SkillsDetail({ cvDetail }) {
  return (
    <div className="my-6">
      <h2 className="mb-2 text-center text-sm font-bold">Skills</h2>
      <hr />
      <div>
        <span className="text-xs font-bold">Skills:</span>
        {cvDetail?.skills?.map((skill, i) => (
          <span key={skill?.id} className="text-xs">
            {" "}
            {skill?.name}
            {cvDetail?.skills?.length - 1 === i ? "" : ","}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsDetail;
