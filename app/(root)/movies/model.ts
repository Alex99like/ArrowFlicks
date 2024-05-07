import { FilteredService } from '@/services/filtered'
import { RequestMovieCards, TypeMovieCard } from '@/types/movie'
import { attach, createEffect, createStore, sample } from 'effector'
import { $activeFilter } from '../filtered/model'

export const $movies = createStore<RequestMovieCards | null>(null)
const $pageMovies = createStore<string>('1')

export const fetchMoviesFx = attach({
  source: { filter: $activeFilter, page: $pageMovies },
  async effect({ filter, page }) {
    return await FilteredService.getMovies(filter, page)
  },
})

sample({
  clock: $activeFilter,
  fn: () => '1',
  target: $pageMovies,
})

sample({
  clock: $activeFilter,
  target: fetchMoviesFx,
})

sample({
  clock: fetchMoviesFx.doneData,
  target: $movies,
})
