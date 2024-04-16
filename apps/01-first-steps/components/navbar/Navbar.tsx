import type { FC } from 'react'

export const Navbar: FC = () => {
  return (
    <nav className="flex gap-2 bg-blue-800/30 p-2 m-2 rounded">
      <span>Home</span>

      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/pricing">Pricing</a>
    </nav>
  )
}
