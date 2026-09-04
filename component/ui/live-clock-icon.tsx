"use client";

import { useEffect, useState } from "react";

type ClockTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

const INITIAL_TIME: ClockTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getDoualaTime(): ClockTime {
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
    hours: getPart("hour"),
    minutes: getPart("minute"),
    seconds: getPart("second"),
  };
}

export default function LiveClockIcon() {
  const [time, setTime] = useState<ClockTime>(INITIAL_TIME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getDoualaTime());

    const interval = window.setInterval(() => {
      setTime(getDoualaTime());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const hourAngle = mounted
    ? ((time.hours % 12) + time.minutes / 60) * 30
    : 0;

  const minuteAngle = mounted
    ? (time.minutes + time.seconds / 60) * 6
    : 0;

  const secondAngle = mounted
    ? time.seconds * 6
    : 0;

  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
      aria-hidden="true"
    >
      {/* Clock face */}
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Hour markers */}
      <circle cx="12" cy="4.5" r="0.55" fill="currentColor" />
      <circle cx="19.5" cy="12" r="0.55" fill="currentColor" />
      <circle cx="12" cy="19.5" r="0.55" fill="currentColor" />
      <circle cx="4.5" cy="12" r="0.55" fill="currentColor" />

      {/* Hour hand */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        transform={`rotate(${hourAngle} 12 12)`}
      />

      {/* Minute hand */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        transform={`rotate(${minuteAngle} 12 12)`}
      />

      {/* Second hand */}
      <line
        x1="12"
        y1="13"
        x2="12"
        y2="5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        transform={`rotate(${secondAngle} 12 12)`}
      />

      {/* Center */}
      <circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}