import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
// se descarga la fuente, la optimiza y se sirve desde el servidor siendo una fuente local

export const metadata = {
  title: 'Next.js + TypeScript + Tailwind CSS Starter',
  description: 'Next.js + TypeScript + Tailwind CSS Starter'
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
