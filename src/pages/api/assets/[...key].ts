import { NextApiRequest, NextApiResponse } from "next";
import { getFile } from "@/lib/r2";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let objectKey = "";

  if (req.url) {
    const urlPath = req.url.split("?")[0];
    if (urlPath.startsWith("/api/assets/")) {
      objectKey = decodeURIComponent(urlPath.replace("/api/assets/", ""));
    } else if (urlPath.startsWith("/api/")) {
      objectKey = decodeURIComponent(urlPath.replace("/api/", ""));
    }
  }

  // Fallback to query parameter
  if (!objectKey) {
    const { key } = req.query;
    objectKey = Array.isArray(key) ? key.join("/") : (key as string || "");
  }

  // If the key is just "borneel.jpg" or doesn't start with "assets/",
  // prepend "assets/" because that's the folder in the R2 bucket.
  if (objectKey && !objectKey.startsWith("assets/")) {
    objectKey = `assets/${objectKey}`;
  }

  if (!objectKey) {
    console.error("No valid object key provided or extracted.");
    return res.status(400).json({ error: "Invalid key or asset path" });
  }

  try {
    const data = await getFile(objectKey);

    if (!data.Body) {
      console.error(`File body empty for objectKey: ${objectKey}`);
      return res.status(404).json({ error: "File not found" });
    }

    if (data.ContentType) {
      res.setHeader("Content-Type", data.ContentType);
    } else {
      if (objectKey.endsWith(".jpg") || objectKey.endsWith(".jpeg")) {
        res.setHeader("Content-Type", "image/jpeg");
      } else if (objectKey.endsWith(".png")) {
        res.setHeader("Content-Type", "image/png");
      } else if (objectKey.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      } else if (objectKey.endsWith(".webp")) {
        res.setHeader("Content-Type", "image/webp");
      } else {
        res.setHeader("Content-Type", "application/octet-stream");
      }
    }

    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    if (typeof (data.Body as any).pipe === "function") {
      (data.Body as any).pipe(res);
    } else if (typeof (data.Body as any).transformToByteArray === "function") {
      const byteArray = await (data.Body as any).transformToByteArray();
      res.send(Buffer.from(byteArray));
    } else {
      res.send(data.Body);
    }
  } catch (error) {
    console.error(`Error loading asset ${objectKey}:`, error);
    return res.status(404).json({ error: "Asset not found" });
  }
}
