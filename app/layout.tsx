export const metadata = { title: 'Dogfood Shop', description: 'E-commerce demo' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
