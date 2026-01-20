"use client";
import { FormState } from "@/types/type";
import { useCallback } from "react";

export const useHandleChangeForm = (
  setFormState: React.Dispatch<React.SetStateAction<FormState>>,
) => {
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setFormState],
  );

  return { handleChange };
};
