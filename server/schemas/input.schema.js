import {z} from 'zod';

export const generateQuizSchema = z.object({
    topic : z.string().min(2),
    difficulty: z.enum(["easy", "medium", "hard"]),
    count: z.number().min(1).max(20)
});

