"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { submit } from "@/app/action/action";
import { Input } from "@/components/ui/input/input";
import { SignupFormSchema } from "@/lib/definition";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button";
import { Separator } from "../separator";
import Image from "next/image";

interface FormTeacherProps {
  title?: string;
}

type SignUpSchemaType = z.infer<typeof SignupFormSchema>;

export const TeacherForm = ({ title }: FormTeacherProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignupFormSchema),
  });

  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const onSubmit = async (data: SignUpSchemaType) => {
    console.log("data", data);
    try {
      const result = await submit(data);

      if (result?.status === 200) {
        reset();
      }
    } catch (error) {
      alert(error);
    } finally {
      alert("created");
    }
  };

  const file = watch("file");

  React.useEffect(() => {
    if (file instanceof File) {
      const fileUrl = URL.createObjectURL(file);
      setImagePreview(fileUrl);
      return () => URL.revokeObjectURL(fileUrl);
    }
    if (typeof file === "string") {
      setImagePreview(file);
    }
  }, [file]);

  return (
    <>
      <h3 className="text-2xl text-center text-slate-700  font-semibold">
        {title}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mt-7 font-extralight text-sm">
          Authentication Information
        </p>
        <Separator className="my-1" orientation="horizontal" />
        <div className="grid grid-cols-2 mt-5  gap-3 md:grid-cols-3 md:gap-3">
          <div>
            <label className="text-sm" htmlFor="username">
              Username
            </label>
            <Input {...register("username")} placeholder="Username" />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <Input {...register("email")} placeholder="Email" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>
        <p className="mt-7 font-extralight text-sm">Personal Information</p>
        <Separator className="my-1" orientation="horizontal" />
        <div className=" mt-6 grid grid-cols-3  gap-3 md:grid-cols-3 md:gap-3">
          <div>
            <label className="text-sm" htmlFor="firstName">
              First Name
            </label>
            <Input {...register("firstName")} placeholder="First Name" />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm" htmlFor="lastName">
              Last Name
            </label>
            <Input {...register("lastName")} placeholder="Last Name" />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm" htmlFor="gender">
              Gender
            </label>
            <Input {...register("gender")} />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm" htmlFor="blood">
              Blood
            </label>
            <Input {...register("blood")} />
            {errors.blood && (
              <p className="text-red-500 text-sm">{errors.blood.message}</p>
            )}
          </div>
          <div className=" col-span-2 items-baseline ">
            <div className="mt-5">
              <label>
                <Controller
                  name="file"
                  control={control}
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <Input
                      type="file"
                      ref={ref}
                      name={name}
                      onBlur={onBlur}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                    />
                  )}
                />
              </label>
            </div>
            {imagePreview && (
              <Image src={imagePreview} width={20} height={20} alt="preview" />
            )}
            {errors.file && (
              <p className="text-red-500 text-sm">{errors.file.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            // className="disabled:cursor-not-allowed"
            variant="default"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
