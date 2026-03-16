const fallbackOrigin = "http://localhost:3000";

export function getSiteOrigin() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) {
    return fallbackOrigin;
  }

  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallbackOrigin;
  }
}
