"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold text-primary">
          Something went wrong
        </h1>
        <p className="mt-4 text-sm text-gray-700">
          We encountered an unexpected error. Please try refreshing the page or
          return later.
        </p>

        <div className="mt-6 space-y-4">
          <Button className="w-full" onClick={reset}>
            Retry
          </Button>
          <Link className="block" href="/">
            <Button className="w-full" variant="outline">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
