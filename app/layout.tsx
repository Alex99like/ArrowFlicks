// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--poppins',
})

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { RootLayout } from '@/layout/root-layout'

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <MantineProvider
          theme={{
            fontFamily: 'Poppins, sans-serif',
            fontFamilyMonospace: 'Poppins, Courier, monospace',
            headings: { fontFamily: 'Poppins, sans-serif' },
          }}
        >
          <RootLayout>{children}</RootLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
