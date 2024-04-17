import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page | EDCA',
  description: 'About Page by EDCA CODES',
}

export default function AboutPage(): JSX.Element {
  return <h1 className="text-5xl">About Page</h1>
}
