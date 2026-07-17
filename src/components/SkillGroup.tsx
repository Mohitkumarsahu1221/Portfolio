import type { SkillGroup as SkillGroupData } from "~/lib/profile";
import { Chip } from "./Chip";

type SkillGroupProps = {
  group: SkillGroupData;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="skill-group">
      <h4>{group.label}</h4>
      <div className="skill-tags">
        {group.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  );
}