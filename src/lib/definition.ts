import { z } from "zod";
export const SignupFormSchema = z.object({
  username: z.string().nonempty({ message: "First name is required." }),
  email: z.string().nonempty({ message: "Last name is required." }),
  password: z.string().nonempty({ message: "Address is required." }),
  firstName: z.string().nonempty({ message: "Address is required." }),
  lastName: z.string().nonempty({ message: "Address is required." }),

  gender: z.string().nonempty({ message: "Gender is required." }),
  blood: z.string().nonempty({ message: "Status is required." }),
  files: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: "File is required.",
  }),
});

export type FormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        address?: string[];
        status?: string[];
        gender?: string[];
      };
      message?: string;
    }
  | undefined;
