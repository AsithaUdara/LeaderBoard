import { Paper, Student } from '../types';

export const papers: Paper[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Paper ${i + 1}`,
  driveLink: 'https://drive.google.com/drive/folders/1kaJsqi0pD8O6RRp7ifCJXCna0z2UHRI_?usp=drive_link'
}));

export const students: Student[] = [
  { id: 1, name: "Chamasha", marks: 93 },
  { id: 2, name: "Sanjana", marks: 95 },
  { id: 3, name: "Gayani", marks: 59 },
  { id: 4, name: "Sayani", marks: 52 },
  { id: 5, name: "Sayuri", marks: 93 },
  { id: 6, name: "Idusha", marks: 98 },
  { id: 7, name: "Rusiru", marks: 98 }
];
