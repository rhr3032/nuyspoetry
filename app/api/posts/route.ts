import { NextRequest, NextResponse } from "next/server";
import { PostType } from "@prisma/client";

import { getAuthPayloadFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { postSchema } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");
  const postType = Object.values(PostType).find((value) => value === type);

  const posts = await prisma.post.findMany({
    where: postType ? { type: postType } : undefined,
    orderBy: { publishedDate: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const auth = getAuthPayloadFromRequest(req);

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const parsed = postSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const post = await prisma.post.create({
      data: parsed.data,
    });

    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create post." }, { status: 500 });
  }
}
