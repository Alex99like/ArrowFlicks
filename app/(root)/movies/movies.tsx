'use client'

import { Flex } from '@mantine/core'
import { useUnit } from 'effector-react'
import { $activeFilter } from '../filtered/model'
import { useEffect } from 'react'
import { FilteredService } from '@/services/filtered'

export const Movies = () => {
  const { filter } = useUnit({ filter: $activeFilter })

  useEffect(() => {
    console.log('render')
    FilteredService.getMovies(filter)
  }, [filter])

  return <Flex></Flex>
}
