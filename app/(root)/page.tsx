'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Flex, Group, NavLink, Text } from '@mantine/core'
import { LogoIcon } from '@/assets/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FilteredRoot } from './filtered/filtered'

export default function Home() {
  return (
    <Flex direction={'column'} align={'flex-start'} py={40} px={50}>
      <Text component="h1" fw={700} style={{ fontSize: 32 }}>
        Movies
      </Text>
      <FilteredRoot />
    </Flex>
  )
}
