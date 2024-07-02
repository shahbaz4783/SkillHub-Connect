const SkillsList = ({ skills }: { skills: string }) => {
  const skillArray = skills.split(',').map((skill) => skill.trim());
  const visibleSkills = skillArray.slice(0, 2);
  const remainingSkillsCount = skillArray.length - visibleSkills.length;

  return (
    <div className="flex flex-nowrap items-center gap-3 overflow-hidden">
      {visibleSkills.map((skill, index) => (
        <span
          key={index}
          className="overflow-hidden text-ellipsis whitespace-nowrap rounded-3xl bg-slate-200 px-2 py-1 text-sm md:px-4"
        >
          {skill}
        </span>
      ))}
      {remainingSkillsCount > 0 && (
        <span className="overflow-hidden text-ellipsis whitespace-nowrap rounded-3xl bg-slate-100 px-2 py-1 text-sm md:px-4">
          + {remainingSkillsCount} more
        </span>
      )}
    </div>
  );
};

export default SkillsList;

export function AllSkills ({ skills }: { skills: string }) {
  return (
    <div className="space-x-3 md:w-1/2">
    {skills.split(',').map((item, index) => (
      <span
      key={index}
      className="rounded-3xl bg-slate-200 p-2 text-sm text-slate-600 md:px-4"
      >
        {item.trim()}
      </span>
    ))}
  </div>
  )
};