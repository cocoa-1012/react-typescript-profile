import { Experience } from "./experience";
import { SkillCategory } from "./skill-category";

export interface ParsedResume {
  description: string;
  resumeFile: string;
  degree: string;
  school: string;
  experienceDuration: string;
  salary: number;
  experiences: Experience[];
  skillsByCategory: SkillCategory[];
}
