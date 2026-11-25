export function getMeetingsApiUrl(path: string): URL {
  const appUrl =
    process.env.APP_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : undefined);

  if (!appUrl) {
    throw new Error(
      "Set APP_URL to the deployed app's origin to fetch meeting data.",
    );
  }

  return new URL(path, appUrl);
}
