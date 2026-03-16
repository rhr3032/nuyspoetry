import { NextRequest, NextResponse } from "next/server";

import { getAuthPayloadFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { postSchema } from "@/lib/validation";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: NextRequest, context: RouteContext) {
  const auth = getAuthPayloadFromRequest(req);

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    const body = await req.json();
    const parsed = postSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const post = await prisma.post.update({
      where: { id },
      data: parsed.data,
    });

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Failed to update post." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const auth = getAuthPayloadFromRequest(req);

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    await prisma.post.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}
