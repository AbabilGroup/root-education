"use client";

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

interface Task {
  name: string;
  description: string;
}

interface FormValues {
  tasks: Task[];
}

const MyForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      tasks: [{ name: "", description: "" }], // Default single task
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`tasks.${index}.name` as const)}
            placeholder="Task Name"
          />
          <input
            {...register(`tasks.${index}.description` as const)}
            placeholder="Task Description"
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", description: "" })}
      >
        Add Task
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
