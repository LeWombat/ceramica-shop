import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import { ToastProvider } from '@/components/UI/Toast'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Ceramica - Керамическая посуда ручной работы',
  description: 'Уникальный бренд керамической посуды ручной работы',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <ToastProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  )
} 