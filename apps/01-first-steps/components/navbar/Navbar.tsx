import type { FC } from 'react'

export const Navbar: FC = () => {
  return (
    <nav className="m-2 flex gap-2 rounded bg-blue-800/30 p-2">
      <span>Home</span>

      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/pricing">Pricing</a>
    </nav>
  )
}
