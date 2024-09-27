function ExperienceDetail({ cvDetail }) {
  return (
    <div className="my-6">
      <h2 className="mb-2 text-center text-sm font-bold">Experience</h2>
      <hr />
      {cvDetail?.experience?.map((experience, i) => (
        <div key={i} className="my-5">
          <h2 className="text-sm font-bold">{experience?.title}</h2>
          <h2 className="flex justify-between text-xs">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} -{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          {/* <p className="my-2 text-xs">{experience?.workSummery}</p> */}
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperienceDetail;
