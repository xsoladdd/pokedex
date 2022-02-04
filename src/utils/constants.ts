export const colorVariant = [
  "primary",
  "secondary",
  "danger",
  "warning",
  "info",
] as const;
// export type colorVariant = "primary" | "secondary" | "danger" | "warning";
export type colorVariantTypes = typeof colorVariant[number];

export const sizeVariant = ["small", "medium", "large"] as const;
// export type sizeVariant = "small" | "medium" | "large";
export type sizeVariantTypes = typeof sizeVariant[number];
