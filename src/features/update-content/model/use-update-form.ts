import { FormState } from "@/types/type";

export const useUpdateForm = (formState: FormState) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return { handleSubmit };
};
