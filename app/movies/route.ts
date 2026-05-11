import { movies } from "./db";
export async function GET() {
  return Response.json(movies);
}

export async function POST(request: Request) {
  let movie = await request.json();
  console.log("New movie added:", movie);
  const newMovie = { ...movie, id: movies.length + 1 };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie), { status: 201 });
}
