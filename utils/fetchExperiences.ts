import { Experience } from '../typings';
export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`, { cache: 'no-store' }
  );
  if (res.headers.get("Content-Type") !== "application/json") return
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
