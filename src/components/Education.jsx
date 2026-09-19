const Education = () => {
  const education = {
    degree: "Secondary Education (Grade 10)",
    institution: "Rapti Southern ENG Boarding School",
    location: "Dang, Nepal",
    period: "2014 – Present",
    description:
      "Currently preparing for the Secondary Education Examination (SEE), with a strong interest in Mathematics, Science, Computer Science, and technology.",
  };

  return (
    <div className="flex flex-col px-10 py-10 gap-6">
      <h1 className="text-4xl font-semibold">Education</h1>

      <div className="bg-zinc-800 rounded-xl p-6">
        <div className="flex justify-between items-start flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-semibold">
              {education.degree}
            </h2>

            <p className="text-zinc-300 mt-2">
              {education.institution}
            </p>
          </div>

          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">
            {education.period}
          </span>
        </div>

        <p className="text-zinc-400 mt-3">
          📍 {education.location}
        </p>

        <p className="text-zinc-300 mt-4 max-w-3xl leading-relaxed">
          {education.description}
        </p>
      </div>
    </div>
  );
};

export default Education;