import Link from 'next/link'
export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-5xl">Home Page</h1>
      <Link href="/about">About Page</Link>
    </main>
  )
}
