// src/data/mockData.ts
import { Paper, Student } from '../types';

export const students: Student[] = [
  { id: 1, name: "Chamasha" },
  { id: 2, name: "Sanjana" },
  { id: 3, name: "Gayani" },
  { id: 4, name: "Sayani" },
  { id: 5, name: "Sayuri" },
  { id: 6, name: "Idusha" },
  { id: 7, name: "Rusiru" },
  { id: 8, name: "Basura" },
  { id: 9, name: "Kalana" },
  { id: 10, name: "Raveesha" }
];

export const papers: Paper[] = [
  {
    id: 1,
    title: "Paper 1",
    driveLink: 'https://drive.google.com/drive/folders/1kaJsqi0pD8O6RRp7ifCJXCna0z2UHRI_?usp=drive_link',
    isAvailable: true,
    studentMarks: [
      { studentId: 1, marks: 93 },
      { studentId: 2, marks: 95 },
      { studentId: 3, marks: 59 },
      { studentId: 4, marks: 52 },
      { studentId: 5, marks: 93 },
      { studentId: 6, marks: 98 },
      { studentId: 7, marks: 98 },
      { studentId: 8, marks: 65 },
      { studentId: 9, marks: 80 },
      { studentId: 10, marks: 85 }
    ]
  },

  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 2,
    title: `Paper ${i + 2}`,
    driveLink: 'https://drive.google.com/drive/folders/1kaJsqi0pD8O6RRp7ifCJXCna0z2UHRI_?usp=drive_link',
    isAvailable: false,
    studentMarks: []
  }))
];

export const getStudentMarksForPaper = (paperId: number) => {
  const paper = papers.find(p => p.id === paperId);
  if (!paper || !paper.studentMarks) return [];

  return paper.studentMarks.map(mark => {
    const student = students.find(s => s.id === mark.studentId);
    return {
      id: mark.studentId,
      name: student?.name || '',
      marks: mark.marks
    };
  });
};