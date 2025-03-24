import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
// se descarga la fuente, la optimiza y se sirve desde el servidor siendo una fuente local

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // The %s in the template will be replaced with the specific page title.
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
