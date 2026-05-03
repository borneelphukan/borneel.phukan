import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

export const r2Client = new S3Client({
  region: "auto", // R2 automatically determines the bucket region
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME || "";

/**
 * Lists all objects within a specific folder/prefix in the R2 bucket.
 * @param folderName The name of the folder or prefix (e.g., 'blogs', 'images/')
 */
export async function listFilesInFolder(folderName: string) {
  const prefix = folderName.endsWith("/") ? folderName : `${folderName}/`;
  
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
  });

  try {
    const data = await r2Client.send(command);
    return data.Contents || [];
  } catch (error) {
    console.error(`Error listing files in folder "${folderName}":`, error);
    throw error;
  }
}

/**
 * Fetches an object from the R2 bucket.
 * @param key The object key (e.g., 'blogs/my-post.md')
 */
export async function getFile(key: string) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  try {
    const response = await r2Client.send(command);
    return response;
  } catch (error) {
    console.error(`Error fetching file "${key}":`, error);
    throw error;
  }
}

/**
 * Converts a stream into a string. Useful for reading text/markdown from R2.
 */
export async function streamToString(stream: any): Promise<string> {
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    if (!stream || typeof stream.on !== "function") {
      resolve("");
      return;
    }
    stream.on("data", (chunk: any) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err: any) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}
