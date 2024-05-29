import { z } from 'zod'

export const createNoteSchema = z.object({
    body: z.object({
        title: z
            .string()
            .min(1, { message: "Name must be greater than 1 character"}),
        content: z
            .string()
            .min(4, { message: "Content must be greater than 4 character"})
    })
})

export const updateNoteSchema = z.object({
    params: z.object({ id: z.string()}),
    body: z
        .object({
            title: z
                .string()
                .min(1, { message: "Name must be greateer than 1 character"}),
            content: z
                .string()
                .min(4, { message: "Content must be greater than 4 character"})
        })
        .partial()
})