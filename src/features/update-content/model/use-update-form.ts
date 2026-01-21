"use client";
import { FormState } from "@/types/type";
import { updateContentAction } from "../api/action";
import { useState } from "react";

export const useUpdateForm = (
  formState: FormState,
  setSwitchForm: (e: boolean) => void,
) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const res = await updateContentAction(formState);

    if (res && !res.success) {
      setError(res.error);
      setIsPending(false);
      return;
    }

    setSwitchForm(false);
  };

  return { handleSubmit, error, isPending };
};
