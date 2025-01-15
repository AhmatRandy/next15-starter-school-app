"use server";

import { SignupFormSchema } from "@/lib/definition";
import { z } from "zod";
type Input = z.infer<typeof SignupFormSchema>;

export async function submit(formData: Input) {
  const validatedFields = SignupFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
      status: 500,
    };
  }
  if (validatedFields.success) {
    return {
      message: "Form submitted successfully!",
      data: formData,
      status: 200,
    };
  }
}
