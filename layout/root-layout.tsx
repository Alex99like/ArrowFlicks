import { Sidebar } from '@/components/sidebar'
import { Flex } from '@mantine/core'
import { PropsWithChildren } from 'react'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      h={'100vh'}
    >
      <Sidebar />
      {children}
    </Flex>
  )
}
