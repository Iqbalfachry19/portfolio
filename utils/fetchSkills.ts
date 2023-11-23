import { Skill } from '../typings';
export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, { cache: 'no-store' });
  if (res.headers.get("Content-Type") !== "application/json") return
  const data = await res.json();
  const skills: Skill[] = data.skills;
  return skills;
};
