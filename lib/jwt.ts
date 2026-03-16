import jwt, { SignOptions } from "jsonwebtoken";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  return secret;
}

export type AuthTokenPayload = {
  userId: string;
  username: string;
};

export function signAuthToken(payload: AuthTokenPayload, options?: SignOptions): string {
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: "7d",
    ...options,
  });
}

export function verifyAuthToken(token: string): AuthTokenPayload {
  return jwt.verify(token, getJwtSecret()) as AuthTokenPayload;
}
