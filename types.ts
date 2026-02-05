
export type Language = string;

// Added Message interface for AIChatAssistant
export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  color: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface ImpactProject {
  id: string;
  title: string;
  description: string;
}

export interface CVContent {
  ui: any;
  info: any;
  impactProjects: ImpactProject[];
  skills: Skill[];
  softSkills: any[];
  languages: any[];
  experiences: Experience[];
  education: Education[];
}