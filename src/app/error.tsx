"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="font-bold text-4xl">Something went wrong!</h1>
      <p className="text-muted-foreground">
        We're sorry, but something went wrong. Please try again later.
      </p>
      <Button onClick={() => reset()}>Reload Page</Button>
    </div>
  );
}
