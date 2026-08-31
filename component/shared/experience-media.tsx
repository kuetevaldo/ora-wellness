import Image, { type StaticImageData } from "next/image";
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

type ExperienceMediaProps = {
  kind: "video" | "photo";
  label: string;
  className?: string;
  tone?: MediaTone;
  src?: string;
  poster?: string | StaticImageData;
  priority?: boolean;
  fit?: "cover" | "contain";
  desktopPosition?: string;
  mobilePosition?: string;
  desktopFocus?: { x: string; y: string };
  mobileFocus?: { x: string; y: string };
  overlay?: "none" | "soft" | "strong";
  preload?: "none" | "metadata";
  sizes?: string;
  labelPosition?: "left" | "right";
  layout?: "flow" | "absolute";
};

export default function ExperienceMedia({
  kind,
  label,
  className = "",
  tone = "burgundy",
  src,
  poster,
  priority = false,
  fit = "cover",
  desktopPosition = "center center",
  mobilePosition = "center center",
  desktopFocus = { x: "68%", y: "34%" },
  mobileFocus = { x: "50%", y: "38%" },
  overlay = "soft",
  preload = "none",
  sizes = "100vw",
  labelPosition = "left",
  layout = "flow",
}: ExperienceMediaProps) {
  const palette = tones[tone];
  const hasMedia = kind === "photo" ? Boolean(poster) : Boolean(src);
  const isDecorativeVideo = kind === "video" && hasMedia;
  const style = {
    "--experience-media-start": palette.start,
    "--experience-media-end": palette.end,
    "--experience-media-label": palette.label,
    "--experience-media-position": desktopPosition,
    "--experience-media-position-mobile": mobilePosition,
    "--experience-media-focus-x": desktopFocus.x,
    "--experience-media-focus-y": desktopFocus.y,
    "--experience-media-focus-x-mobile": mobileFocus.x,
    "--experience-media-focus-y-mobile": mobileFocus.y,
    "--experience-media-fit": fit,
  } as CSSProperties;

  return (
    <figure
      className={`ora-experience-media ${className}`}
      style={style}
      data-kind={kind}
      data-fit={fit}
      data-overlay={overlay}
      data-desktop-position={desktopPosition}
      data-mobile-position={mobilePosition}
      data-label-position={labelPosition}
      data-layout={layout}
      aria-hidden={isDecorativeVideo ? true : undefined}
      aria-label={
        isDecorativeVideo
          ? undefined
          : hasMedia
            ? `${label} image`
            : `${label} placeholder`
      }
      role={isDecorativeVideo ? undefined : "img"}
    >
      {kind === "photo" && poster ? (
        <Image
          src={poster}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className="ora-experience-media__poster"
        />
      ) : null}

      {kind === "video" && src ? (
        <video
          className="ora-experience-media__video"
          autoPlay
          muted
          loop
          playsInline
          preload={preload}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      {!hasMedia ? (
        <>
          <span className="ora-experience-media__guide" aria-hidden="true">
            {kind}-ready
            <br />
            {fit} fit
            <br />
            desktop: {desktopPosition}
            <br />
            mobile: {mobilePosition}
          </span>
          <figcaption className="ora-experience-media__label">
            {label}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
