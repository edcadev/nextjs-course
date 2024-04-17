import { Navbar } from '@/components'

export default function GeneralLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="flex justify-center py-4">{children}</main>
    </>
  )
}
