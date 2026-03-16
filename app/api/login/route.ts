import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

import { createAuthToken, validateAdminCredentials } from "@/lib/auth";
import { AUTH_COOKIE_NAME } from "@/lib/constants";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }

    const user = await validateAdminCredentials(parsed.data.username, parsed.data.password);

    if (!user) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const token = createAuthToken({ userId: user.id, username: user.username });

    const cookieStore = await cookies();
    cookieStore.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
