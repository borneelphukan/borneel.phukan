export const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || process.env.R2_PUBLIC_URL || "";

export const getR2Url = (path: string) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${R2_PUBLIC_URL}/${cleanPath}`;
};
