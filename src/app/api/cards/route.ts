import { redis } from "@/lib/redis";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  if (name) {
    const data = await redis.json.get(name);
    return Response.json(data);
  }
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  if (name) {
    const data = await redis.json.get(name);
    return Response.json(data);
  }
}