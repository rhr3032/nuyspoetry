import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import { AUTH_COOKIE_NAME } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { AuthTokenPayload, signAuthToken, verifyAuthToken } from "@/lib/jwt";

export async function validateAdminCredentials(username: string, password: string) {
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return null;
  }

  return user;
}

export function createAuthToken(payload: AuthTokenPayload) {
  return signAuthToken(payload);
}

export function getAuthPayloadFromRequest(req: NextRequest): AuthTokenPayload | null {
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyAuthToken(token);
  } catch {
    return null;
  }
}

export async function getAuthPayloadFromCookies(): Promise<AuthTokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyAuthToken(token);
  } catch {
    return null;
  }
}
