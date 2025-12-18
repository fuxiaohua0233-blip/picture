
export interface CourseItem {
  id: number;
  title: string;
  description: string;
}

export interface LearningStep {
  id: number;
  text: string;
  action: string;
}

export interface PosterData {
  mainTitle: string;
  subTitle: string;
  tagline: string;
  questionTitle: string;
  questionSubtitle: string;
  courseItems: CourseItem[];
  learningMethodTitle: string;
  learningSteps: LearningStep[];
  footerTitle: string;
  footerSlogan: string;
}
