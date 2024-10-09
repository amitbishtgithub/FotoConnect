import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Too short for a name 😒"}),
    username: z.string().min(2, {message: "Too short to be a username 😒"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Need more than 8 characters. Make it a strong one 😉"})
})