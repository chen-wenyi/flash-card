export interface Card {
  id: number;
  title: string;
  desc: string;
  answer: string;
  hint: string;
  reviseTime: number
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number; // milliseconds
}