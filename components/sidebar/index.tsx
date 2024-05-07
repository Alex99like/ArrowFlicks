'use client'

import { LogoIcon } from '@/assets/logo'
import { Flex, Group, NavLink, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'

export const Sidebar = () => {
  const pathname = usePathname()

  const hrefMovies = () => pathname === '/'
  const hrefRated = () => pathname === '/rated-movies'

  return (
    <Flex
      gap={80}
      w={280}
      bg={'#F2EBF9'}
      justify="flex-start"
      align="flex-start"
      direction="column"
      p={24}
      h={'100vh'}
    >
      <Group display={'flex'} gap={12} align="center">
        <LogoIcon />
        <Text size={'lg'} fw={600} color="#9854F6">
          ArrowFlicks
        </Text>
      </Group>
      <Flex direction={'column'} w="100%" gap={10}>
        <NavLink
          component={Link}
          href={'/'}
          label={'Movies'}
          color="#9854F6"
          classNames={{ root: styles.navlink }}
          style={{ borderRadius: 8 }}
          active={hrefMovies()}
        />
        <NavLink
          component={Link}
          href={'/rated-movies'}
          label={'Rated movies'}
          color="#9854F6"
          classNames={{ root: styles.navlink }}
          style={{ borderRadius: 8 }}
          active={hrefRated()}
        />
      </Flex>
    </Flex>
  )
}
