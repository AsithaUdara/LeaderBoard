// src/types/index.ts
export interface Student {
  id: number;
  name: string;
}

export interface PaperMarks {
  studentId: number;
  marks: number;
}

export interface Paper {
  id: number;
  title: string;
  driveLink: string;
  isAvailable: boolean;
  studentMarks?: PaperMarks[];
}