"use client";
import { FormState } from "@/types/type";
import { useState } from "react";
import { useHandleChangeForm } from "../model/use-handle-change-form";
import { useUpdateForm } from "../model/use-update-form";

type Props = {
  formData: FormState;
  cancelForm: () => void;
};

export const UpdateContentForm = ({ formData, cancelForm }: Props) => {
  const [formState, setFormState] = useState<FormState>({
    id: formData.id,
    title: formData.title,
    excerpt: formData.excerpt,
    status: formData.status,
  });

  const { handleSubmit } = useUpdateForm(formState, cancelForm);
  const { handleChange } = useHandleChangeForm(setFormState);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-600">
      <h3 className="text-3xl font-bold">Редактирование Публикации</h3>

      <label className="font-semibold flex items-start gap-2">
        Title
        <input
          name="title"
          className="font-normal border-2 border-gray-600 rounded-md p-1"
          type="text"
          value={formState.title}
          onChange={handleChange}
        />
      </label>

      <label className="font-semibold flex items-start gap-2">
        Status
        <select
          name="status"
          className="font-normal border-2 border-gray-600 rounded-md p-1"
          value={formState.status}
          onChange={handleChange}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </label>

      <label className="font-semibold flex items-start gap-2">
        Excerpt
        <textarea
          name="excerpt"
          className="font-normal border-2 border-gray-600 rounded-md p-1"
          value={formState.excerpt}
          onChange={handleChange}
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className=" font-semibold text-gray-600 w-30 bg-amber-400 px-4 py-2 rounded hover:bg-amber-500 cursor-pointer"
        >
          Update
        </button>
        <button
          type="button"
          className=" font-semibold text-gray-50 w-30 bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 cursor-pointer"
          onClick={cancelForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
