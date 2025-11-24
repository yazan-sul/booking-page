import { NextResponse } from "next/server";

export async function GET() {
  // Your API logic here
  return NextResponse.json({ message: "Hello from doctors API" });
}

// Optionally, a POST handler
export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ data });
}
