import { z } from "zod";

// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

// function formatBytes(bytes, decimals = 2) {
//   if (bytes === 0) return "0 Bytes";
//   const k = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
//   const i = Math.floor(Math.log(bytes) / Math.log(k));
//   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
// }

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const SignupFormSchema = z.object({
  username: z.string().nonempty({ message: "Username is required." }),
  email: z.string().nonempty({ message: "Email is required." }),
  password: z.string().nonempty({ message: "Password is required." }),
  firstName: z.string().nonempty({ message: "First name is required." }),
  lastName: z.string().nonempty({ message: "Last name is required." }),
  gender: z.string().nonempty({ message: "Gender is required." }),
  blood: z.string().nonempty({ message: "Blood type is required." }),
  file: z
    .union([
      z.instanceof(File, { message: "File is required" }),
      z.string().optional(),
    ])
    .refine((value) => value instanceof File || typeof value === "string", {
      message: "File is Required",
    }),
});
