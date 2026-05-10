import { movies } from "./db";
export async function GET() {
  return;
  Response.json(movies);
}
