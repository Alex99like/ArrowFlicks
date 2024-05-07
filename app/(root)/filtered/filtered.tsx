'use client'

import { Button, Flex, Input, Select, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import styles from './filtered.module.css'
import { FilteredService } from '@/services/filtered'
import { fetchFilteredData, useFilteredStore } from './model'

export const FilteredRoot = () => {
  const { genres, release, activeFilter, setActiveFilter, from, to, sort } =
    useFilteredStore()

  useEffect(() => {
    fetchFilteredData()
  }, [])

  return (
    <Flex direction={'column'} gap={10} w={'100%'}>
      <Flex direction={'row'} gap={16} align={'flex-end'}>
        <Select
          radius={8}
          w={'100%'}
          label="Genres"
          classNames={{ label: styles.label_select }}
          placeholder="Select genre"
          data={genres}
          defaultValue={activeFilter.genre}
          onChange={(value) => setActiveFilter({ name: 'genre', value })}
          rightSection={<IconChevronDown size="1.5rem" stroke={1.5} />}
        />
        <Select
          radius={8}
          w={'100%'}
          label="Release year"
          classNames={{ label: styles.label_select }}
          placeholder="Select release year"
          data={release}
          defaultValue={activeFilter.release}
          onChange={(value) => setActiveFilter({ name: 'release', value })}
          rightSection={<IconChevronDown size="1.5rem" stroke={1.5} />}
        />
        <Flex direction={'column'}>
          <Text component="h2" className={styles.label_select}>
            Ratings
          </Text>
          <Flex direction={'row'} gap={8}>
            <Select
              radius={8}
              placeholder="From"
              value={activeFilter.from}
              defaultValue={activeFilter.from}
              data={from}
              w={140}
              onChange={(value) => setActiveFilter({ name: 'from', value })}
            />
            <Select
              radius={8}
              placeholder="To"
              value={activeFilter.to}
              defaultValue={activeFilter.to}
              data={to}
              w={140}
              onChange={(value) => setActiveFilter({ name: 'to', value })}
            />
          </Flex>
        </Flex>
        <Button
          fullWidth
          variant="transparent"
          color="#7B7C88"
          mx={0}
          fw={500}
          size="sm"
          maw={90}
        >
          Reset filters
        </Button>
      </Flex>
      <Flex justify={'end'}>
        <Select
          radius={8}
          label="Release year"
          classNames={{ label: styles.label_select }}
          placeholder="Select release year"
          data={sort}
          defaultValue={activeFilter.release}
          onChange={(value) => setActiveFilter({ name: 'release', value })}
          rightSection={<IconChevronDown size="1.5rem" stroke={1.5} />}
        />
      </Flex>
    </Flex>
  )
}
