import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getAuthSession();

  console.log(session);

  if (!session) {
    return {
      status: 401,
      body: { message: "Not Authenticated!" },
    };
  }

  return new NextResponse(JSON.stringify(session, { status: 200 }));
};
