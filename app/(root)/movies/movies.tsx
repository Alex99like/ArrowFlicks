'use client'

import { Card, Flex, Grid, Paper } from '@mantine/core'
import { useUnit } from 'effector-react'
import { $activeFilter } from '../filtered/model'
import { useEffect } from 'react'
import { FilteredService } from '@/services/filtered'
import { $movies, fetchMoviesFx } from './model'
import { CardMovie } from './card'

export const Movies = () => {
  const { movies } = useUnit({ movies: $movies })

  useEffect(() => {
    fetchMoviesFx()
  }, [])

  return (
    <Grid gutter="md">
      {movies?.results.map((element, index) => (
        <Grid.Col span={6} key={index}>
          <CardMovie movie={element} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
