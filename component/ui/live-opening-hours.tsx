"use client";

import { useEffect, useState } from "react";

type OpeningStatus = {
  isOpen: boolean;
  hours: number;
  minutes: number;
};

type LiveOpeningHoursProps = {
  dark?: boolean;
};

const OPEN_HOUR = 6;
const CLOSE_HOUR = 22;

function getDoualaTime() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Douala",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const getPart = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  return {
    hour: getPart("hour"),
    minute: getPart("minute"),
    second: getPart("second"),
  };
}

function calculateStatus(): OpeningStatus {
  const { hour, minute, second } = getDoualaTime();

  const currentSeconds =
    hour * 60 * 60 +
    minute * 60 +
    second;

  const openingSeconds =
    OPEN_HOUR * 60 * 60;

  const closingSeconds =
    CLOSE_HOUR * 60 * 60;

  const isOpen =
    currentSeconds >= openingSeconds &&
    currentSeconds < closingSeconds;

  let remainingSeconds: number;

  if (isOpen) {
    remainingSeconds =
      closingSeconds - currentSeconds;
  } else if (currentSeconds < openingSeconds) {
    remainingSeconds =
      openingSeconds - currentSeconds;
  } else {
    remainingSeconds =
      24 * 60 * 60 -
      currentSeconds +
      openingSeconds;
  }

  return {
    isOpen,
    hours: Math.floor(
      remainingSeconds / 3600
    ),
    minutes: Math.floor(
      (remainingSeconds % 3600) / 60
    ),
  };
}

export default function LiveOpeningHours({
  dark = false,
}: LiveOpeningHoursProps) {
  const [status, setStatus] =
    useState<OpeningStatus | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      setStatus(calculateStatus());
    };

    updateStatus();

    const interval = window.setInterval(
      updateStatus,
      1000
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  if (!status) {
    return (
      <div className="mt-3">
        <p
          className={`text-sm font-medium ${
            dark
              ? "text-white"
              : "text-(--ora-burgundy-dark)"
          }`}
        >
          Daily · 6:00 AM – 10:00 PM
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3">
      {/* Open / Closed */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`size-2 rounded-full ${
            status.isOpen
              ? "bg-emerald-400"
              : dark
                ? "bg-white/60"
                : "bg-(--ora-burgundy)"
          }`}
        />

        <span
          className={`text-sm font-semibold ${
            dark
              ? "text-white"
              : "text-(--ora-burgundy-dark)"
          }`}
        >
          {status.isOpen
            ? "Open now"
            : "Closed"}
        </span>
      </div>

      {/* Countdown */}
      <p
        className={`mt-1 text-xs ${
          dark
            ? "text-white"
            : "text-(--ora-text-secondary)"
        }`}
      >
        {status.isOpen
          ? "Closes in"
          : "Opens in"}{" "}
        {status.hours > 0
          ? `${status.hours}h `
          : ""}
        {String(status.minutes).padStart(
          2,
          "0"
        )}
        m
      </p>

      {/* Opening hours */}
      <p
        className={`mt-3 text-xs font-medium ${
          dark
            ? "text-white"
            : "text-(--ora-burgundy)/75"
        }`}
      >
        Daily · 6:00 AM – 10:00 PM
      </p>
    </div>
  );
}