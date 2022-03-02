import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  console.log(`${pathname} middleware`);

  if (pathname == "/") {
    return NextResponse.redirect(
      new URL(`/${Math.floor(Math.random() * 898 + 1)}`, req.url)
    );
  }
  return NextResponse.next(ev);
}
