import {z} from 'zod';

export const questionSchema = z.object({
  id: z.string(),
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctIndex: z.number().min(0).max(3),
  explanation: z.string()
});


export const quizSchema = z.object({
  topic: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]),
  questions: z.array(questionSchema).min(1)
});