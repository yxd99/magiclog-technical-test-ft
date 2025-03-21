import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filtersToQueryParams(
  filters?: Record<string, unknown>,
): string {
  if (typeof filters === "undefined") return "";
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (value !== null && value !== undefined && value !== "") {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string -- is a valid type
      params.append(key, value.toString());
    }
  }

  return params.toString();
}

export const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const formatCurrency = (value: number, currency = "COP") =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
  }).format(value);
