import { Genre } from './genres'

export interface TypeMovieCard {
  adult: boolean
  backdrop_path: string
  genre_ids: Genre[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: 6.369
  vote_count: 1195
}

export interface RequestMovieCards {
  page: number
  results: Array<TypeMovieCard>
  total_pages: number
  total_results: number
}
