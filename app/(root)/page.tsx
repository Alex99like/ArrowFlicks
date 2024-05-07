'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Flex, Group, NavLink, Text } from '@mantine/core'
import { LogoIcon } from '@/assets/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FilteredRoot } from './filtered/filtered'
import { Movies } from './movies/movies'

export default function Home() {
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      py={40}
      px={50}
      gap={40}
      w={'100%'}
      h={'100%'}
      bg={'#F5F5F6'}
    >
      <Text component="h1" fw={700} style={{ fontSize: 32 }}>
        Movies
      </Text>
      <FilteredRoot />
      <Movies />
    </Flex>
  )
}
