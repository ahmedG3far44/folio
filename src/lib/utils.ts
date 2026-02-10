import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type MediaKind = "image" | "video";

export interface MediaInfo {
  kind: MediaKind;
  mimeType: string;
}



export function getMediaInfo(url: string): MediaInfo | null {
  const cleanUrl = url.split("?")[0].toLowerCase();

  const imageMimeTypes: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
  };

  const videoMimeTypes: Record<string, string> = {
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    m4v: "video/x-m4v",
    hevc: "video/hevc",
    h265: "video/hevc",
    ogv: "video/ogg",
  };

  const extension = cleanUrl.split(".").pop();

  if (!extension) return null;

  if (extension in imageMimeTypes) {
    return {
      kind: "image",
      mimeType: imageMimeTypes[extension],
    };
  }

  if (extension in videoMimeTypes) {
    return {
      kind: "video",
      mimeType: videoMimeTypes[extension],
    };
  }

  return null;
}
