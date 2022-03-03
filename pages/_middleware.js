import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect(
      new URL(`/${Math.floor(Math.random() * 898 + 1)}`, req.url)
    );
  }
  return NextResponse.next(ev);
}
