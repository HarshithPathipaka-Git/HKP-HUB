
export type SectionID = 'home' | 'html' | 'css' | 'python' | 'c' | 'cpp' | 'java' | 'os' | 'linux';

export interface Topic {
  title: string;
  content: string;
  codeSnippet?: string;
  category?: string; // New field for sub-grouping topics
}

export interface LearningSection {
  id: SectionID;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  topics: Topic[];
}
