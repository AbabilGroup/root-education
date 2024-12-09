// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useForm } from "react-hook-form";

// type TTestimonial = {
//   photo: File | null | FileList | string;
//   name: string;
//   designation: string;
//   comment: string;
//   rating: number;
// };

// const AddTestimonialForm = () => {
//   const { handleSubmit, register, control, reset } = useForm<TTestimonial>({
//     defaultValues: {
//       photo: null,
//       name: "",
//       designation: "",
//     },
//   });

//   const handleAddVisa: SubmitHandler<TTestimonial> = (data) => {
//     console.log(data);

//     const formData = new FormData();
//     formData.append("data", JSON.stringify(data));

//     if (data.photo instanceof FileList && data.photo.length > 0) {
//       formData.append("photo", data.photo[0]);
//     } else if (data.photo instanceof File) {
//       formData.append("photo", data.photo);
//     } else if (typeof data.photo === "string") {
//       formData.append("photo", data.photo);
//     }

//     mutate(formData);
//   };
//   return (
//     <form onSubmit={handleSubmit(handleAddVisa)}>
//       <div>
//         <Label>Member Name</Label>
//         <Input {...register("name")} type="text" required />
//       </div>
//       <div>
//         <Label>Designation</Label>
//         <Input {...register("designation")} type="text" required />
//       </div>
//       <div>
//         <Label>Photo</Label>
//         <Input {...register("photo")} type="file" required />
//       </div>
//     </form>
//   );
// };

// export default AddTestimonialForm;
