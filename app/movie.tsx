import Link from "next/link";
import Image from "next/image";

interface MovieProps {
  title : string;
  id: string;
  poster_path: string;
  release_date: string;
}

export default function Movie ({ title, id, poster_path, release_date}: MovieProps) {
    const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`
    return (
        <div>
            <h1>{title}</h1>
            <h2>Release Date: {release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath} width={800} height={800} alt="Image" />
            </Link>
        </div>
    )
}