"use client";
import React from "react";
import { UpdateContentForm } from "@/features/update-content";
import { FormState } from "@/types/type";

export const SwitchStateForm = ({ title, status, excerpt, id }: FormState) => {
  const [switchForm, setSwitchForm] = React.useState(false);

  return (
    <>
      {switchForm ? (
        <UpdateContentForm
          formData={{ title, status, excerpt, id }}
          cancelForm={() => setSwitchForm(false)}
        />
      ) : (
        <header className="flex flex-col gap-2 text-gray-600">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p>{status}</p>
          <p>{excerpt}</p>

          <button
            onClick={() => setSwitchForm(true)}
            className="mt-4 w-fit rounded bg-amber-400 px-4 py-2 font-semibold hover:bg-amber-500"
          >
            Edit
          </button>
        </header>
      )}
    </>
  );
};
