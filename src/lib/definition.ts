import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SignupFormSchema = z.object({
  username: z.string().nonempty({ message: "First name is required." }),
  email: z.string().nonempty({ message: "Last name is required." }),
  password: z.string().nonempty({ message: "Address is required." }),
  firstName: z.string().nonempty({ message: "Address is required." }),
  lastName: z.string().nonempty({ message: "Address is required." }),

  gender: z.string().nonempty({ message: "Gender is required." }),
  blood: z.string().nonempty({ message: "Status is required." }),
  file: z
    .instanceof(File, { message: "File must be a valid file object." })
    .refine((file) => file !== undefined && file.size > 0, {
      message: "File is required.",
    })
    .z.refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `The image is too large. Please choose an image smaller than ${formatBytes(
        MAX_FILE_SIZE
      )}.`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Please upload a valid image file (JPEG, PNG, or WebP).",
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
