import { Button, Flex, Input, Select, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'
import styles from './filtered.module.css'

export const FilteredRoot = () => {
  const [active, setActive] = useState(false)

  return (
    <Flex direction={'column'}>
      <Flex direction={'row'} gap={16} align={'flex-end'}>
        <Select
          radius={8}
          label="Genres"
          classNames={{ label: styles.label_select }}
          placeholder="Select genre"
          data={['react', 'angular']}
          rightSection={<IconChevronDown size="1.5rem" stroke={1.5} />}
        />
        <Select
          radius={8}
          label="Release year"
          classNames={{ label: styles.label_select }}
          //styles={{  }}
          placeholder="Select release year"
          data={['react', 'angular']}
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
              data={['react', 'angular']}
              w={140}
            />
            <Select
              radius={8}
              placeholder="To"
              data={['react', 'angular']}
              w={140}
            />
          </Flex>
        </Flex>
        <Button variant="transparent" color="#7B7C88" fw={500} size="sm">
          Reset filters
        </Button>
      </Flex>
    </Flex>
  )
}
