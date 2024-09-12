import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BTC_IMAGE_URL =
  "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg";
