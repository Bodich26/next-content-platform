"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold text-gray-600">
          Something went wrong!
        </h2>
        <button
          className="text-gray-600 w-30 bg-amber-400 px-4 py-2 rounded hover:bg-amber-500 mx-auto mt-4 cursor-pointer"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
