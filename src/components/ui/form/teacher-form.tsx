"use client";

import { useForm } from "react-hook-form";
import { submit } from "@/app/action/action";
import { Input } from "@/components/ui/input/input";
import { SignupFormSchema } from "@/lib/definition";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormTeacherProps {
  title: string;
}

type SignUpSchemaType = z.infer<typeof SignupFormSchema>;

export const TeacherForm = ({ title }: FormTeacherProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      const result = await submit(data);

      if (result?.status === 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert("created");
    }
  };

  return (
    <>
      <h3 className="text-2xl font-normal">{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 mt-2 gap-3 md:grid-cols-3 md:gap-3">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Input {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Input {...register("address")} />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Input {...register("status")} />
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Input {...register("gender")} />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="disabled:cursor-not-allowed" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
