import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

export default async function NotFound() {
  let t: ((key: string) => string) | null = null;
  try {
    t = await getTranslations("NotFound");
  } catch {
    // Fallback to English if locale resolution fails
  }

  const heading = t?.("heading") ?? "Page not found";
  const body =
    t?.("body") ??
    "The page you're looking for doesn't exist, or may have moved.";
  const cta = t?.("cta") ?? "Return to ORA";
  const experiences = t?.("experiences") ?? "Explore experiences";

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex min-h-[80dvh] flex-col items-center justify-center bg-(--ora-cream) px-6 py-32 text-center text-(--ora-burgundy-dark)"
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
          404
        </p>

        <h1 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          {heading}
        </h1>

        <p className="mt-5 max-w-sm text-sm leading-7 text-(--ora-text-secondary)">
          {body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="ora-button ora-button-primary">
            {cta}
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>

          <Link
            href="/schedule"
            className="ora-button ora-button-secondary"
          >
            {experiences}
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
