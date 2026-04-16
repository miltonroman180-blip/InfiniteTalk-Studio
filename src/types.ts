export enum Step {
  Material = 1,
  Voice = 2,
  Config = 3,
  Generate = 4,
  Publish = 5,
}

export interface Voice {
  id: string;
  name: string;
  desc: string;
  gender: 'male' | 'female';
  avatar: string;
  tags: string[];
}

export interface VideoSpec {
  id: string;
  label: string;
  resolution: string;
  ratio: string;
  recommended?: boolean;
}
