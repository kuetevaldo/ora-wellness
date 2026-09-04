"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OraPreloader() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("ora-preloader-seen");

    if (alreadySeen) {
      return;
    }

    setVisible(true);

    const leaveTimer = window.setTimeout(() => {
  setLeaving(true);
}, 1000);

const removeTimer = window.setTimeout(() => {
  setVisible(false);
  sessionStorage.setItem("ora-preloader-seen", "true");
}, 1300);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-(--ora-cream) transition-opacity duration-300 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(.23,1,.32,1)] motion-reduce:transition-none ${
          leaving
            ? "-translate-y-1 scale-[0.985] opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="relative h-24 w-44 sm:h-28 sm:w-52">
          <Image
            src="/images/footer-image/ora.PNG"
            alt=""
            fill
            priority
            sizes="208px"
            className="object-contain"
          />
        </div>

        <div className="mt-7 h-px w-28 overflow-hidden bg-(--ora-burgundy)/15">
          <div className="ora-preloader-line h-full w-full bg-(--ora-burgundy)" />
        </div>
      </div>
    </div>
  );
}