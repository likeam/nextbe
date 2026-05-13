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
