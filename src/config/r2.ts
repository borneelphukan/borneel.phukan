export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || "https://pub-0a2eeceea05f4b00bc0da29be0d52d0d.r2.dev";

export const getR2Url = (path: string) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${R2_PUBLIC_URL}/${cleanPath}`;
};
