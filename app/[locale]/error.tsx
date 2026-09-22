"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if available
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="flex min-h-dvh flex-col items-center justify-center bg-(--ora-cream) px-6 py-32 text-center text-(--ora-burgundy-dark)"
    >
      <div className="relative mb-10 h-20 w-40 sm:h-24 sm:w-48">
        <Image
          src="/images/logos/ora-wellness.png"
          alt="ORA Wellness"
          fill
          priority
          sizes="192px"
          className="object-contain"
        />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
        Something went wrong
      </p>

      <h1 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl">
        An unexpected error occurred
      </h1>

      <p className="mt-5 max-w-sm text-sm leading-7 text-(--ora-text-secondary)">
        We&rsquo;re sorry for the inconvenience. Please try again, or return to
        the home page.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="ora-button ora-button-primary"
        >
          <RefreshCw size={15} strokeWidth={1.5} aria-hidden="true" />
          Try again
        </button>

        <Link href="/" className="ora-button ora-button-secondary">
          Return to ORA
          <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
