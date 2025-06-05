import {z} from 'zod';

export const schema = z.object({
    name:z.string().min(1,"nombre es obligatorio"),
    email: z.string().email("correo invalido").min(1,"el correo es obligatorio"),
    password: z.string().min(5, "la contraseña debe tener 6 caracteres"),
    confirmPassword: z.string().min(5,"la confirmacin debe tener al menos 6 caracteres")
}).refine((data)=>data.password === data.confirmPassword,{
    message: "Las contraseñas son inválidas",
    path:["confirmPassword"]
});

export type FormValues = z.infer<typeof schema>