import { TypeMovieCard } from '@/types/movie'
import { Card } from '@mantine/core'
import Image from 'next/image'

export const CardMovie = ({ movie }: { movie: TypeMovieCard }) => {
  console.log(movie)
  return (
    <Card p={24}>
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={200}
          height={200}
          alt="photo"
        />
      )}
    </Card>
  )
}
