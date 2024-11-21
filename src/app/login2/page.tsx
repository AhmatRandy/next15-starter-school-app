// "use client";

// import { useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button/button";
// import { Input } from "@/components/ui/input/input";
// import { Label } from "@/components/ui/label/label";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card/card";

// const formSchema = z.object({
//   name: z.string().nonempty({ message: "Nama wajib diisi" }),
//   address: z.string().nonempty({ message: "Alamat wajib diisi" }),
//   email: z.string().email({ message: "Email tidak valids" }),
//   phone: z.string().nonempty({ message: "Nomor telepon wajib diisi" }),
//   gender: z.string().nonempty({ message: "Jenis kelamin wajib diisi" }),
//   password: z.string().nonempty({ message: "Password wajib diisi" }),
//   city: z.string().nonempty({ message: "Kota wajib diisi" }),
//   zip: z.string().nonempty({ message: "Kode pos wajib diisi" }),
// });

// type FormValues = z.infer<typeof formSchema>;

// const defaultValues: FormValues = {
//   email: "",
//   password: "",
// };

// const fieldOrder = ["name", "address", "email", "phone", "gender"] as const;

// const FormComponent: React.FC = () => {
//   const {
//     handleSubmit,
//     control,
//     setFocus,
//     formState: { errors, isSubmitting },
//   } = useForm<typeof defaultValues>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log("data", data);
//   };

//   const scrollToError = () => {
//     const arrayErrors = Object.keys(errors);
//     if (arrayErrors.length > 0) {
//       const firstErrorField = fieldOrder.find((field) => field in errors);

//       if (firstErrorField) {
//         setFocus(firstErrorField);
//       }
//     }
//   };

//   useEffect(() => {
//     if (isSubmitting) {
//       scrollToError();
//     }
//   }, [isSubmitting, errors]);

//   useEffect(() => {
//     setFocus("name");
//   }, [setFocus]);

//   return (
//     <>
//       <div className="flex justify-center mt-40">
//         <Card className="w-[400px] shadow-xl rounded-lg">
//           {/* Form Header with Gradient Background */}
//           <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center py-6 rounded-t-lg">
//             <CardTitle className="text-2xl font-semibold">
//               Welcome Back!
//             </CardTitle>
//             <CardDescription className="text-sm">
//               Please log in to your account
//             </CardDescription>
//           </CardHeader>

//           {/* Form Content with Elegant Background */}
//           <CardContent className="bg-white p-6 rounded-b-lg shadow-lg">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {/* Email Input */}
//               <div className="flex flex-col space-y-2">
//                 <Label
//                   htmlFor="email"
//                   className="text-sm text-gray-700 font-medium"
//                 >
//                   Email Address
//                 </Label>
//                 <Controller
//                   control={control}
//                   rules={{ required: "Email is required", maxLength: 100 }}
//                   render={({ field: { onChange, onBlur, value } }) => (
//                     <Input
//                       placeholder="Enter your email"
//                       onBlur={onBlur}
//                       onChange={onChange}
//                       value={value}
//                       className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   )}
//                   name="email"
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="flex flex-col space-y-2">
//                 <Label
//                   htmlFor="password"
//                   className="text-sm text-gray-700 font-medium"
//                 >
//                   Password
//                 </Label>
//                 <Controller
//                   control={control}
//                   rules={{ required: "Password is required", minLength: 6 }}
//                   render={({ field: { onChange, onBlur, value } }) => (
//                     <Input
//                       type="password"
//                       placeholder="Enter your password"
//                       onBlur={onBlur}
//                       onChange={onChange}
//                       value={value}
//                       className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   )}
//                   name="password"
//                 />
//               </div>

//               {/* Forgot Password Link */}
//               <div className="flex justify-end">
//                 <a href="#" className="text-sm text-teal-600 hover:underline">
//                   Forgot Password?
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-6">
//                 <Button
//                   type="submit"
//                   className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
//                 >
//                   Log In
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default FormComponent;
