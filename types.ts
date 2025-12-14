export interface ImageData {
  src: string;
  alt: string;
  category: 'result' | 'expert';
}

export interface FeatureData {
  title: string;
  description: string;
  iconName: string;
}

export interface StepData {
  number: number;
  title: string;
  description: string;
}