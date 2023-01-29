import Movie from "./movie";

export default async function Home() {
  const API = "https://api.themoviedb.org/3"
  const data = await fetch(`${API}/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
      {
          res.results.map((movie: any) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title} 
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))
        }
      </div>
    </main>
  )
}
