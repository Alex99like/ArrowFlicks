'use server'

import { Genre } from '@/types/genres'
import { fetchApi } from '../fetch-api'

export const getGenres = async () => {
  const data = await fetchApi<{ genres: Array<Genre> }>('genre/movie/list')

  return data.genres
}
