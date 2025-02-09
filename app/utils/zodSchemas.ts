import {z} from "zod"
export const onboardingschema = z.object({
    firstName : z.string().min(2,"First name is required"),
    lastName: z.string().min(2,'Lastname is required'),
    address: z.string().min(2,'Address is required')

})