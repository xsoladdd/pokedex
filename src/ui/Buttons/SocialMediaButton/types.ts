export const socialMediaVariant = [
  "facebook",
  "instagram",
  "google",
  "youtube",
  "github",
] as const;
export type socialMediaVariantTypes = typeof socialMediaVariant[number];
