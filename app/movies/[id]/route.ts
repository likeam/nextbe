import { NextRequest, typeNextRequest } from 'next/server.js';
import { movies } from "../db";
export async function GET(_req: Request, { params }: Props) {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id === +id);
  return movie
    ? new Response(JSON.stringify(movie), { status: 200 })
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(_req: Request, { params }: Props) {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id === +id);
  if (!movie) {
    return new Response("Movie not found", { status: 404 });
  }

  const body = await req.json();

  const updateTitle = body.title || movie.title;
  const updateDirector = body.director || movie.director;
  const updateYear = body.year || movie.year;
  const updateGenre = body.genre || movie.genre;

  return new Response(
    JSON.stringify({
      ...movie,
      title: updateTitle,
      director: updateDirector,
      year: updateYear,
      genre: updateGenre,
    }),00
    { status: 200 },
  );
}


export async function GET(request: NextRequest) {
  const { searchParams } =request.nextUrl.searchParams;
  const query = searchParams.get("query") || "";
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );
  return new Response(JSON.stringify(filteredMovies), { status: 200 }); 
  
}