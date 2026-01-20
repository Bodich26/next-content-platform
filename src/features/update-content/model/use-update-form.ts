import { FormState } from "@/types/type";
import { updateContentAction } from "../api/action";

export const useUpdateForm = (
  formState: FormState,
  setSwitchForm: (e: boolean) => void,
) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateContentAction(formState);
      console.log("Updated content:", updated);
      setSwitchForm(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  return { handleSubmit };
};
