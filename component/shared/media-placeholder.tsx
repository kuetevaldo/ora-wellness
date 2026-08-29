import type { CSSProperties } from "react";

type MediaTone = "burgundy" | "sage" | "pink" | "ink" | "cream";

const tones: Record<
  MediaTone,
  { start: string; end: string; label: string }
> = {
  burgundy: { start: "#8b485b", end: "#633341", label: "#fcfaf7" },
  sage: { start: "#d8dfd8", end: "#aeb9ae", label: "#633341" },
  pink: { start: "#ead2da", end: "#c98ea1", label: "#633341" },
  ink: { start: "#4b4244", end: "#302a2b", label: "#fcfaf7" },
  cream: { start: "#fcfaf7", end: "#ead2da", label: "#633341" },
};

type MediaPlaceholderProps = {
  label: string;
  className?: string;
  tone?: MediaTone;
  fit?: "cover" | "contain";
  desktopPosition?: string;
  mobilePosition?: string;
  desktopFocus?: { x: string; y: string };
  mobileFocus?: { x: string; y: string };
  overlay?: "none" | "soft";
};

export default function MediaPlaceholder({
  label,
  className = "",
  tone = "burgundy",
  fit = "cover",
  desktopPosition = "center center",
  mobilePosition = "center center",
  desktopFocus = { x: "70%", y: "28%" },
  mobileFocus = { x: "50%", y: "38%" },
  overlay = "none",
}: MediaPlaceholderProps) {
  const palette = tones[tone];
  const style = {
    "--media-color-start": palette.start,
    "--media-color-end": palette.end,
    "--media-label-color": palette.label,
    "--media-focus-x": desktopFocus.x,
    "--media-focus-y": desktopFocus.y,
    "--media-mobile-focus-x": mobileFocus.x,
    "--media-mobile-focus-y": mobileFocus.y,
  } as CSSProperties;

  return (
    <div
      className={`ora-media-placeholder ${className}`}
      style={style}
      data-media-fit={fit}
      data-desktop-position={desktopPosition}
      data-mobile-position={mobilePosition}
      data-overlay={overlay}
      role="img"
      aria-label={`${label}. Future image uses ${fit} fit, ${desktopPosition} on desktop, and ${mobilePosition} on mobile.`}
    >
      <span className="ora-media-placeholder__guide" aria-hidden="true">
        {fit} fit
        <br />
        desktop: {desktopPosition}
        <br />
        mobile: {mobilePosition}
      </span>
      <span className="ora-media-placeholder__label" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
