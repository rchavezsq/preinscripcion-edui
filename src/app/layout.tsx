import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Formulario de Preinscripción',
    description: 'Formulario de preinscripción',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={` md:bg-gray-300/70 `}>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    )
}
