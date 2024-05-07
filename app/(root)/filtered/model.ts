import { FilteredService } from '@/services/filtered'
import { Genre } from '@/types/genres'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'

const $genres = createStore<{ label: string; value: string }[]>([])
const $releaseYear = createStore<string[]>(generateYears(2000, 2024))
const $sortOptions = createStore([
  { value: 'popularity.asc', label: 'Popularity Ascending' },
  { value: 'popularity.desc', label: 'Popularity Descending' },
  { value: 'release_date.asc', label: 'Release Date Ascending' },
  { value: 'release_date.desc', label: 'Release Date Descending' },
  // { value: 'revenue.asc', label: 'Revenue Ascending' },
  // { value: 'revenue.desc', label: 'Revenue Descending' },
  // { value: 'primary_release_date.asc', label: 'Primary Release Date Ascending' },
  // { value: 'primary_release_date.desc', label: 'Primary Release Date Descending' },
  // { value: 'original_title.asc', label: 'Original Title Ascending' },
  // { value: 'original_title.desc', label: 'Original Title Descending' },
  // { value: 'vote_average.asc', label: 'Vote Average Ascending' },
  // { value: 'vote_average.desc', label: 'Vote Average Descending' },
  // { value: 'vote_count.asc', label: 'Vote Count Ascending' },
  // { value: 'vote_count.desc', label: 'Vote Count Descending' }
])

export const fetchFilteredData = createEvent()

const fetchGenres = createEffect(async () => {
  const data = await FilteredService.getGenres()

  return data
})

sample({
  clock: fetchFilteredData,
  target: fetchGenres,
})

sample({
  clock: fetchGenres.doneData,
  fn: (data) => data.map(({ id, name }) => ({ value: `${id}`, label: name })),
  target: $genres,
})

const $fromRating = createStore(generateRating())
const $toRating = createStore(generateRating())

type KeyFilter = 'genre' | 'release' | 'from' | 'to' | 'sort'

export const $activeFilter = createStore<
  Record<KeyFilter, string | null | undefined>
>(
  {
    genre: null,
    sort: 'popularity.asc',
    release: null,
    from: null,
    to: null,
  },
  { skipVoid: false }
)

const setActiveFilter = createEvent<{
  name: KeyFilter
  value: string | null | undefined
}>()

sample({
  clock: setActiveFilter,
  source: $activeFilter,
  fn: (data, state) => {
    const obj = { ...data }
    obj[state.name] = state.value

    // if (obj.from && obj.to) {
    //   if (+obj.from > +obj.to) {
    //     obj.from = obj.to
    //   }
    //   if (+obj.to < +obj.from) {
    //     obj.from = obj.to
    //   }
    // }

    return obj
  },
  target: $activeFilter,
})

sample({
  source: $activeFilter,
  fn: (data) => generateRating(data.from),
  target: $toRating,
})

sample({
  source: $activeFilter,
  fn: (data) => generateRating(null, data.to),
  target: $fromRating,
})

export const useFilteredStore = () => {
  const { genres, release, activeFilter, from, to, sort } = useUnit({
    genres: $genres,
    release: $releaseYear,
    activeFilter: $activeFilter,
    sort: $sortOptions,
    from: $fromRating,
    to: $toRating,
  })
  return { genres, release, activeFilter, setActiveFilter, from, to, sort }
}

function generateYears(start: number, end: number) {
  let years = []
  for (let year = start; year <= end; year++) {
    years.push(`${year}`)
  }
  return years
}

function generateRating(min?: string | null, max?: string | null) {
  const rat = Array.from({ length: 10 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
    disabled: false,
  }))

  if (min) {
    return rat.map((data) => {
      return { ...data, disabled: +data.value >= +min ? false : true }
    })
  }
  if (max) {
    return rat.map((data) => {
      return { ...data, disabled: +data.value <= +max ? false : true }
    })
  }

  return rat
}
