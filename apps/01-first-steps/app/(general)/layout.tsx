import { Navbar } from '@/components'

export default function PublicLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Navbar />

      <main>
        <h1>Hello General Layout</h1>
        {children}
      </main>
    </>
  )
}
