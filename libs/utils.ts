import dayjs from "dayjs";

export function formatCurrency(
  value: number | string,
  currency = "USD",
): string {
  const numericValue = typeof value === "number" ? value : Number(value);

  if (!Number.isFinite(numericValue)) {
    return "$0.00";
  }

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  try {
    return new Intl.NumberFormat("en-US", options).format(numericValue);
  } catch {
    return new Intl.NumberFormat("en-US", {
      ...options,
      currency: "USD",
    }).format(numericValue);
  }
}


export const formatSubscriptionDateTime = (value? : string) : string => {
  if(!value) return "Unknown";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MMM/DD/YYYY") : "Not Provided";
};

export const formatStatusLabel = (value? : string) : string => {
  if(!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
}
