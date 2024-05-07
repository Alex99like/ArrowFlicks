'use server'

import { RequestMovieCards } from '@/types/movie'
import { fetchApi } from '../fetch-api'

export const getMovies = async (
  params: Record<string, string | null | undefined>,
  page: string
) => {
  const query: Record<string, string | null | undefined> = {
    language: 'en-US',
    with_genres: params.genre,
    primary_release_year: params.release,
    'vote_average.gte': params.from,
    'vote_average.lte': params.to,
    sort_by: params.sort,
    page,
  }

  const param: Record<string, string> = {}

  for (const key in query) {
    const item = query[key]
    if (item) {
      param[key] = item
    }
  }

  const data = new URLSearchParams(param).toString()

  const movies = await fetchApi<RequestMovieCards>('discover/movie', data)

  return movies
}
